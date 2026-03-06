<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  message: { type: String, default: '修改成功！' },
  autoClose: { type: Boolean, default: true },
  autoCloseDelay: { type: Number, default: 3000 }
})

const emit = defineEmits(['update:visible'])

let timer = null

watch(() => props.visible, (newVal) => {
  if (newVal && props.autoClose) {
    timer = setTimeout(() => handleClose(), props.autoCloseDelay)
  } else if (!newVal && timer) {
    clearTimeout(timer)
  }
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

const handleClose = () => {
  emit('update:visible', false)
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-show="visible" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click="handleClose">
      <!-- 遮罩层（点击关闭） -->
      <div class="fixed inset-0 bg-black/40 backdrop-blur-sm"></div>

      <!-- 弹窗卡片（阻止事件冒泡） -->
      <div
        class="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center border border-white/20"
        @click.stop
      >
        <!-- 图标区域 -->
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <!-- 消息文本 -->
        <h3 class="text-lg font-semibold text-gray-800 mb-6">{{ message }}</h3>

        <!-- 确定按钮 -->
        <button
          class="w-full px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          @click="handleClose"
        >
          确定
        </button>
      </div>
    </div>
  </Transition>
</template>