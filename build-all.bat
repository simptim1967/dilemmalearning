call css-all.bat

echo Copying image files ...
del ..\live\images\*.jpg
del ..\live\images\*.svg

copy .\images\*.jpg ..\live\images
copy .\images\*.svg ..\live\images

copy .\downloads ..\live\downloads

call script-all.bat

echo Copying HTML files ...

call pug-all.bat

echo Copying root files ...
copy .\sitemap.xml ..\live
copy .\BingSiteAuth.xml ..\live
copy .\robots.txt ..\live
copy .\favicon.ico ..\live

echo Running bootlint against HTML files ...
echo Lint about.html
call bootlint ..\live\about.html
echo Lint index.html
call bootlint ..\live\index.html
