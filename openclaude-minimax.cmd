@echo off
title OpenClaude - Minimax 2.5 (OpenRouter)

echo Configurando ambiente para o OpenRouter (Minimax 2.5)...
set "CLAUDE_CODE_USE_OPENAI=1"
set "OPENAI_BASE_URL=https://openrouter.ai/api/v1"
set "OPENAI_API_KEY=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"
set "OPENAI_MODEL=minimax/minimax-m2.5:free"

echo Iniciando o agente OpenClaude...
call "C:\Users\msx\AppData\Roaming\npm\openclaude.cmd"

if %ERRORLEVEL% neq 0 (
    echo.
    echo Ocorreu um erro ao iniciar. Verifique se a instalacao via npm funcionou.
    pause
)
