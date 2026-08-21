@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo  新文科研究 - 启动开发服务器
echo  地址: http://localhost:3000/journal
echo  （项目带 /journal 路径前缀，根路径会 404）
echo ==========================================

if not exist node_modules (
    echo 首次运行，正在安装依赖...
    call npm install
)

start /min cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000/journal"

call npm run dev
pause
