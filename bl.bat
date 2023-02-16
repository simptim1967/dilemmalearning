@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\2023\39-sprint-planning.pug --pretty --out ..\live\blog\2023
call Pug .\pug\blog\2022\38-recognise-and-prioritise.pug --pretty --out ..\live\blog\2022
call Pug .\pug\blog\blog-history.pug --pretty --out ..\live\blog

