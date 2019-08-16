@echo off
echo Rendering pug test files ...
call Pug pug\test\01-decide-what-to-learn.pug --pretty --out ..\test
call Pug pug\test\personal-new-trick-list.pug --pretty --out ..\test
copy pagelike.js ..\test
