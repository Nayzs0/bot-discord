@echo OFF
RMDIR /s /q "d:\bznbot"
@echo off & color 3 & cls & title Nayzs Luncher
echo - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
echo.
echo.  Tapez lancez pour lancer le serveur de Nayzs
echo   Une fois ecrit faites ENTRER deux fois
echo.
echo - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
echo.
set /p answer="Marquer le mot a droite : "
if /i {%ANSWER%}=={1} (goto :lancez)
pause > nul
CLS
cd d:\bznbot
cmd /k node index.js