@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\capability-smells.pug --pretty --out ..\live\blog

