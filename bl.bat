@echo off
echo Rendering latest blog article ...
call Pug .\pug\blog\2021\34-defect-analysis.pug --pretty --out ..\live\blog\2021
call Pug .\pug\blog\2021\33-observing-the-invisible.pug --pretty --out ..\live\blog\2021
call Pug .\pug\blog\blog-history.pug --pretty --out ..\live\blog

