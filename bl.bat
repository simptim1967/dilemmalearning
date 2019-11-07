@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\progress-metrics.pug --pretty --out ..\live\blog

