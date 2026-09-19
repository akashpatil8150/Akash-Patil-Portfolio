# Hugging Face Spaces Static Deployment Script
# This script builds your portfolio and pushes the static assets to Hugging Face Spaces.

$SpaceUrl = Read-Host -Prompt "Enter your Hugging Face Space Git URL (e.g., https://huggingface.co/spaces/Akash8150/Portfolio)"

if (-not $SpaceUrl) {
    Write-Error "Hugging Face Space URL cannot be empty."
    exit
}

# Ensure HTTPS url ends with .git if it doesn't already, to make git push stable
if ($SpaceUrl.StartsWith("https://") -and -not $SpaceUrl.EndsWith(".git")) {
    $SpaceUrl = $SpaceUrl + ".git"
}

Write-Host "`n1. Running production build..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Production build failed."
    exit
}

Write-Host "`n2. Preparing Hugging Face Space metadata (dist/README.md)..." -ForegroundColor Cyan
$Metadata = @"
---
title: Akash Patil Portfolio
emoji: 💼
colorFrom: blue
colorTo: indigo
sdk: static
pinned: false
---
"@

$Metadata | Out-File -FilePath "dist/README.md" -Encoding utf8

Write-Host "`n3. Initializing local deployment git repo inside dist/..." -ForegroundColor Cyan
Push-Location dist

# Initialize temporary git repository
git init
git checkout -b main
git remote add space $SpaceUrl

# Stage and commit build outputs
git add .
git commit -m "Deploy static portfolio site to HF Spaces"

Write-Host "`n4. Pushing build assets to Hugging Face Space..." -ForegroundColor Cyan
Write-Host "Please authenticate with your Hugging Face credentials/token if prompted." -ForegroundColor Yellow

git push -f space main

Pop-Location

Write-Host "`n✔ Deployment completed! Check your space status on Hugging Face." -ForegroundColor Green
