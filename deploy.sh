#!/bin/sh
# 배포 전 캐시 무효화: CSS/JS 주소의 ?v= 값을 현재 시각으로 바꿉니다
V=$(date +%Y%m%d%H%M)
sed -i -E "s#(css/style\.css|js/hero\.js|js/main\.js|data/content\.js)(\?v=[0-9]+)?\"#\1?v=$V\"#g" index.html
