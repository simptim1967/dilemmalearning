@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\2023\40-getting-hands-on-with-technology.pug --pretty --out ..\live\blog\2023
call Pug .\pug\blog\2023\39-sprint-planning.pug --pretty --out ..\live\blog\2023
call Pug .\pug\blog\blog-history.pug --pretty --out ..\live\blog

