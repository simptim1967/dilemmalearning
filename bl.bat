@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\wall-of-champions.pug --pretty --out ..\live\blog

