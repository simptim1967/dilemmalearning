@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\2022\36-gaining-value-from-sprint-retrospectives.pug --pretty --out ..\live\blog\2022
call Pug .\pug\blog\2021\35-spicing-up-sprint-reviews.pug --pretty --out ..\live\blog\2021
call Pug .\pug\blog\blog-history.pug --pretty --out ..\live\blog

