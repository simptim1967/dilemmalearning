@echo off
echo Rendering pug root files ...
call Pug .\pug\about.pug --pretty --out ..\live
call Pug .\pug\index.pug --pretty --out ..\live
