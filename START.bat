@echo off
REM VINARM BANARSI RITHEE E-Commerce Platform - Startup Script for Windows

cls
echo.
echo  ====================================================
echo  🌟 VINARM BANARSI RITHEE E-COMMERCE PLATFORM 🌟
echo  ====================================================
echo.
echo  Starting application...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo  ❌ ERROR: Node.js is not installed!
    echo  Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo  ✓ Node.js detected
echo.

REM Start Backend Server
echo  📦 Starting Backend Server (Port 5000)...
echo  Location: royal-sarees-backend
start cmd /k "cd royal-sarees-backend && npm start"

REM Wait a moment for backend to start
timeout /t 3 /nobreak

REM Start Frontend Server
echo.
echo  ⚛️  Starting Frontend Server (Port 5174)...
echo  Location: royal-sarees-react
start cmd /k "cd royal-sarees-react && npm run dev"

REM Wait for frontend to start
timeout /t 5 /nobreak

REM Open Chrome
echo.
echo  🌐 Opening Chrome browser...
timeout /t 2 /nobreak

REM Try to open with Chrome
for /f "tokens=2" %%A in ('reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" /ve 2^>nul ^| find /i "REG_SZ"') do set CHROME_PATH=%%A

if defined CHROME_PATH (
    start "" "%CHROME_PATH%" "http://localhost:5174"
) else (
    REM If Chrome not found, try Edge
    for /f "tokens=2" %%A in ('reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe" /ve 2^>nul ^| find /i "REG_SZ"') do set EDGE_PATH=%%A
    if defined EDGE_PATH (
        start "" "%EDGE_PATH%" "http://localhost:5174"
    ) else (
        REM Fallback to default browser
        start http://localhost:5174
    )
)

echo.
echo  ====================================================
echo  ✓ APPLICATION STARTED SUCCESSFULLY!
echo  ====================================================
echo.
echo  🔗 Frontend: http://localhost:5174
echo  🔗 Backend:  http://localhost:5000
echo.
echo  📖 Check the browser window that just opened
echo.
echo  Press any key to close this window...
pause >nul

