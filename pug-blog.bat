@echo off
echo Rendering pug blog files ...
call Pug .\pug\blog\blog-history.pug --pretty --out ..\live\blog
call Pug .\pug\blog\prologue.pug --pretty --out ..\live\blog
call Pug .\pug\blog\the-continuous-learning-dilemma.pug --pretty --out ..\live\blog
call Pug .\pug\blog\rising-to-the-challenge-of-continuous-learning.pug --pretty --out ..\live\blog
call Pug .\pug\blog\continuous-learning-initiatives-learning-vehicles.pug --pretty --out ..\live\blog
call Pug .\pug\blog\continuous-learning-initiatives-technical-communities.pug --pretty --out ..\live\blog
call Pug .\pug\blog\overcoming-obstacles-to-build-a-learning-culture.pug --pretty --out ..\live\blog
call Pug .\pug\blog\pluralsight-live-europe-2019.pug --pretty --out ..\live\blog
call Pug .\pug\blog\crazy-busy.pug --pretty --out ..\live\blog
