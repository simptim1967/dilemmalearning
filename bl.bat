@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\driving-strategic-learning.pug --pretty --out ..\live\blog
call Pug .\pug\blog\blog-history.pug --pretty --out ..\live\blog

