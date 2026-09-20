@echo off
setlocal
cd /d "%~dp0.."

node check-environment.js
if errorlevel 1 exit /b 1

set "NODE_OPTIONS=--openssl-legacy-provider %NODE_OPTIONS%"
echo Starting Signalra at http://localhost:3000
start "Signalra API" /D "%CD%" cmd /k "node app\index.js"
start "Signalra" /D "%CD%" cmd /k "npx --no-install react-scripts start"
exit /b 0
