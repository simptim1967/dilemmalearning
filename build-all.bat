call css-all.bat

echo Copying image files ...
del ..\live\images\*.jpg
del ..\live\images\*.svg

copy .\images\*.jpg ..\live\images
copy .\images\*.svg ..\live\images

call script-all.bat

echo Copying HTML files ...

call pug-all.bat

echo Copying root files ...
rem copy .\sitemap.xml ..\live
copy .\robots.txt ..\live

echo Running bootlint against HTML files ...
call bootlint ..\live\about.html
call bootlint ..\live\index.html
