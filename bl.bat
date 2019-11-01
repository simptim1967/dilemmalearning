@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\creativity-on-demand.pug --pretty --out ..\live\blog

