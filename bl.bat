@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\forced-to-change.pug --pretty --out ..\live\blog
call Pug .\pug\blog\blog-history.pug --pretty --out ..\live\blog

