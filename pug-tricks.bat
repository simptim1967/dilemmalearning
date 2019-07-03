@echo off
echo Rendering pug tricks files ...
call Pug .\pug\tricks\old-dog-new-tricks.pug --pretty --out ..\live\tricks
call Pug .\pug\tricks\personal-new-trick-list.pug --pretty --out ..\live\tricks
call Pug .\pug\tricks\corporate-new-trick-list.pug --pretty --out ..\live\tricks

rem Personal Learning Tricks
call Pug .\pug\tricks\personal\01-decide-what-to-learn.pug --pretty --out ..\live\tricks\personal
call Pug .\pug\tricks\personal\02-make-time-for-personal-learning.pug --pretty --out ..\live\tricks\personal
call Pug .\pug\tricks\personal\03-hide-away-change-the-scenery.pug --pretty --out ..\live\tricks\personal
call Pug .\pug\tricks\personal\04-avoid-distractions-and-occasional-interruptions.pug --pretty --out ..\live\tricks\personal
call Pug .\pug\tricks\personal\05-create-a-personal-development-plan.pug --pretty --out ..\live\tricks\personal
call Pug .\pug\tricks\personal\06-learn-to-manage-your-time-well.pug --pretty --out ..\live\tricks\personal
rem call Pug .\pug\tricks\personal\07-find-ways-of-learning-that-work-for-you.pug --pretty --out ..\live\tricks\personal
rem call Pug .\pug\tricks\personal\08-join-a-community.pug --pretty --out ..\live\tricks\personal
rem call Pug .\pug\tricks\personal\09-join-a-mailing-list.pug --pretty --out ..\live\tricks\personal
rem call Pug .\pug\tricks\personal\10-make-the-day-job-work-for-you.pug --pretty --out ..\live\tricks\personal

rem Corporate Learning Tricks
call Pug .\pug\tricks\corporate\01-technical-skills-are-strategic.pug --pretty --out ..\live\tricks\corporate
call Pug .\pug\tricks\corporate\02-make-time-for-corporate-learning.pug --pretty --out ..\live\tricks\corporate
