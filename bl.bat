@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\frozen-in-time.pug --pretty --out ..\live\blog

