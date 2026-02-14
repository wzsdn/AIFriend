
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from web.models.user import UserProfile

class GetUserInfoView(APIView):
    permission_classes = [IsAuthenticated]  # 登录才继续
    def get(self, request):
        try:
            user=request.user
            user_profile=UserProfile.objects.get(user=user)
            return Response({
                'result': 'success',
                'userid': user.id,
                'username': user.username,
                'photo': user_profile.photo.url,
                'profile': user_profile.profile,
            })
        except:
            return Response({
                'result': '系统异常 稍后再试',
            })

