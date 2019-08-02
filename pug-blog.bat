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
call Pug .\pug\blog\beyond-training.pug --pretty --out ..\live\blog
call Pug .\pug\blog\how-does-a-successful-manager-act.pug --pretty --out ..\live\blog
call Pug .\pug\blog\birmingham-meetup-18062019.pug --pretty --out ..\live\blog
call Pug .\pug\blog\a-big-mistake-about-learning.pug --pretty --out ..\live\blog
call Pug .\pug\blog\a-time-to-reflect.pug --pretty --out ..\live\blog
call Pug .\pug\blog\opening-new-doors-to-new-possibilities.pug --pretty --out ..\live\blog
call Pug .\pug\blog\continuous-curiosity.pug --pretty --out ..\live\blog
call Pug .\pug\blog\blast-off-from-the-past.pug --pretty --out ..\live\blog
call Pug .\pug\blog\out-learn-the-competition.pug --pretty --out ..\live\blog
rem call Pug .\pug\blog\xxx.pug --pretty --out ..\live\blog
