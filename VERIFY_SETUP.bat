@echo off
REM VINARM BANARSI RITHEE - Verify Installation

cls
echo.
echo  ═══════════════════════════════════════════════════════════
echo  🔍 VINARM BANARSI RITHEE - INSTALLATION VERIFICATION
echo  ═══════════════════════════════════════════════════════════
echo.

REM Check Node.js
echo  [1/5] Checking Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo  ❌ Node.js NOT FOUND
    echo  Please install from: https://nodejs.org
    echo.
) else (
    for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
    echo  ✅ Node.js found: %NODE_VERSION%
)

REM Check npm
echo.
echo  [2/5] Checking npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo  ❌ npm NOT FOUND
) else (
    for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
    echo  ✅ npm found: %NPM_VERSION%
)

REM Check Backend Setup
echo.
echo  [3/5] Checking Backend Setup...
if exist "royal-sarees-backend\package.json" (
    echo  ✅ Backend folder found
    if exist "royal-sarees-backend\node_modules" (
        echo  ✅ Backend dependencies installed
    ) else (
        echo  ⚠️  Backend dependencies NOT installed yet
        echo     Run: cd royal-sarees-backend ^&^& npm install
    )
) else (
    echo  ❌ Backend folder NOT found
)

REM Check Frontend Setup
echo.
echo  [4/5] Checking Frontend Setup...
if exist "royal-sarees-react\package.json" (
    echo  ✅ Frontend folder found
    if exist "royal-sarees-react\node_modules" (
        echo  ✅ Frontend dependencies installed
    ) else (
        echo  ⚠️  Frontend dependencies NOT installed yet
        echo     Run: cd royal-sarees-react ^&^& npm install
    )
) else (
    echo  ❌ Frontend folder NOT found
)

REM Check Port Availability
echo.
echo  [5/5] Checking Port Availability...
netstat -ano | find ":5000" >nul 2>&1
if errorlevel 1 (
    echo  ✅ Port 5000 is available (Backend)
) else (
    echo  ⚠️  Port 5000 is already in use
)

netstat -ano | find ":5174" >nul 2>&1
if errorlevel 1 (
    echo  ✅ Port 5174 is available (Frontend)
) else (
    echo  ⚠️  Port 5174 is already in use
)

echo.
echo  ═══════════════════════════════════════════════════════════
echo  ✅ VERIFICATION COMPLETE!
echo.
echo  Next Step: Double-click START.bat to launch the app
echo  ═══════════════════════════════════════════════════════════
echo.
pause

