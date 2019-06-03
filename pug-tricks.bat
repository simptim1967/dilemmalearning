@echo off
echo Rendering pug tricks files ...
call Pug .\pug\tricks\old-dog-new-tricks.pug --pretty --out ..\live\tricks
call Pug .\pug\tricks\personal-new-trick-list.pug --pretty --out ..\live\tricks
call Pug .\pug\tricks\corporate-new-trick-list.pug --pretty --out ..\live\tricks

rem Personal
call Pug .\pug\tricks\personal\01-make-time-for-personal-learning.pug --pretty --out ..\live\tricks\personal

rem Corporate
call Pug .\pug\tricks\corporate\01-make-time-for-corporate-learning.pug --pretty --out ..\live\tricks\corporate
