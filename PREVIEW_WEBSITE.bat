@echo off
title HACKS 2026 Website Preview
echo ===================================================================
echo     HACKS 2026 - Hub for Advanced Creativity, Knowledge & Solutions
echo     New Age Research Initiatives (NARI)
echo ===================================================================
echo.
echo Launching local preview web server...
echo.

cd /d "%~dp0"

:: Check if dist directory exists
if not exist "dist" (
    echo Error: 'dist' directory not found.
    echo Please make sure you have extracted all files from the zip archive.
    echo.
    pause
    exit /b 1
)

:: Automatically open browser
start http://localhost:3000/

:: Start Built-in Windows PowerShell Static Server
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$targetDir = (Resolve-Path 'dist').Path; " ^
  "Write-Host 'Serving files from:' $targetDir; " ^
  "Write-Host 'Website URL: http://localhost:3000/'; " ^
  "Write-Host ''; " ^
  "Write-Host 'Server is running! Keep this window open while testing.' -ForegroundColor Green; " ^
  "Write-Host 'Press Ctrl+C to stop the server.'; " ^
  "$listener = New-Object System.Net.HttpListener; " ^
  "$listener.Prefixes.Add('http://localhost:3000/'); " ^
  "try { $listener.Start(); } catch { Write-Warning 'Port 3000 is busy or requires permission. Trying port 8080...'; $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:8080/'); $listener.Start(); Start-Process 'http://localhost:8080/'; }; " ^
  "while ($listener.IsListening) { " ^
  "  try { " ^
  "    $ctx = $listener.GetContext(); " ^
  "    $reqPath = $ctx.Request.Url.LocalPath.TrimStart('/'); " ^
  "    if ([string]::IsNullOrEmpty($reqPath)) { $reqPath = 'index.html' }; " ^
  "    $file = Join-Path $targetDir $reqPath; " ^
  "    if (-not (Test-Path $file -PathType Leaf)) { $file = Join-Path $targetDir 'index.html' }; " ^
  "    $bytes = [System.IO.File]::ReadAllBytes($file); " ^
  "    $ext = [System.IO.Path]::GetExtension($file).ToLower(); " ^
  "    $mime = switch ($ext) { " ^
  "      '.html' { 'text/html; charset=utf-8' } " ^
  "      '.js'   { 'application/javascript; charset=utf-8' } " ^
  "      '.css'  { 'text/css; charset=utf-8' } " ^
  "      '.png'  { 'image/png' } " ^
  "      '.jpg'  { 'image/jpeg' } " ^
  "      '.jpeg' { 'image/jpeg' } " ^
  "      '.svg'  { 'image/svg+xml' } " ^
  "      '.json' { 'application/json' } " ^
  "      '.avif' { 'image/avif' } " ^
  "      Default { 'application/octet-stream' } " ^
  "    }; " ^
  "    $ctx.Response.ContentType = $mime; " ^
  "    $ctx.Response.ContentLength64 = $bytes.Length; " ^
  "    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length); " ^
  "    $ctx.Response.OutputStream.Close(); " ^
  "  } catch { } " ^
  "}"
