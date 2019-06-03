@echo off
echo Copying CSS files ...
del ..\live\css\*.css
copy .\css\site.css ..\live\css
copy .\css\bootstrap.min.css ..\live\css

