@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\building-people-then-products.pug --pretty --out ..\live\blog

