@echo off
setlocal enabledelayedexpansion

:: 设置项目目录
set "PROJECT_DIR=C:\Users\Moranis\Desktop\Projects\MizukiBlogOfMoranis"

:: 检查目录是否存在
if not exist "%PROJECT_DIR%" (
    echo 错误：目录 "%PROJECT_DIR%" 不存在！
    pause
    exit /b 1
)

echo 正在切换到项目目录: %PROJECT_DIR%
cd /d "%PROJECT_DIR%"

:: 检查是否安装了pnpm
pnpm --version >nul 2>&1
if errorlevel 1 (
    echo 错误：pnpm 未安装或未在PATH中！
    echo 请先安装pnpm: https://pnpm.io/installation
    pause
    exit /b 1
)

echo.
echo ================================
echo 开始执行 pnpm build...
echo ================================
pnpm build

if errorlevel 1 (
    echo.
    echo 错误：pnpm build 执行失败！
    pause
    exit /b 1
)

echo.
echo ================================
echo pnpm build 执行成功！
echo 开始执行 npx gh-pages -d dist...
echo ================================
npx gh-pages -d dist

if errorlevel 1 (
    echo.
    echo 错误：npx gh-pages 执行失败！
    echo 请确保已安装 gh-pages 并配置了 GitHub 仓库
    pause
    exit /b 1
)

echo.
echo ================================
echo 部署完成！项目已成功部署到 GitHub Pages
echo ================================
echo 项目目录: %PROJECT_DIR%
echo 部署时间: %date% %time%

pause