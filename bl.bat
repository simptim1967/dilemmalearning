@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\2021\32-designing-for-traceability.pug --pretty --out ..\live\blog\2021
call Pug .\pug\blog\blog-history.pug --pretty --out ..\live\blog

