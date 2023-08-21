# Node.js 버전을 기반으로 하는 도커 이미지 사용
FROM node:18.16.0-alpine as build

# 애플리케이션 코드를 컨테이너 내부에 복사
WORKDIR /home/front

COPY . .

# 애플리케이션 의존성 설치
RUN npm i

# 애플리케이션 빌드
RUN npm run build

# Nginx를 기반으로한 두 번째 단계 시작
FROM nginx:alpine

# Nginx 설정 파일을 컨테이너 내부에 복사
COPY nginx.conf /etc/nginx/nginx.conf

# Node.js 애플리케이션 빌드 결과물을 Nginx의 웹 루트에 복사
COPY --from=build /home/front/build /usr/share/nginx/html

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

# 컨테이너가 외부로 노출할 포트
EXPOSE 80
