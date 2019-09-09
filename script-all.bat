echo Copying script files ...

del ..\live\script\*.js

copy .\script\bootstrap.min.js ..\live\script
copy .\script\jquery-1.12.4.min.js ..\live\script
copy .\script\pagelike.js ..\live\script
copy .\script\cookie.js ..\live\script
