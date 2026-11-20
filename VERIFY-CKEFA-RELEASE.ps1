# Verify the upgraded CKEFA website locally on Windows.
# Does not deploy or alter the production site.
param([switch]$SkipInstall)
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
Write-Host "`nCKEFA release verification" -ForegroundColor Cyan
Write-Host "Project: $PSScriptRoot"
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Node.js is not installed or not on PATH.' }
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) { throw 'npm is not installed or not on PATH.' }
Write-Host ('Node: ' + (node --version))
Write-Host ('npm:  ' + (npm --version))
function Invoke-Checked($file, $commandArgs, $description) {
  Write-Host "`n==> $description" -ForegroundColor Yellow
  & $file @commandArgs
  if ($LASTEXITCODE -ne 0) { throw "$description failed (exit code $LASTEXITCODE). Do not deploy." }
}
if (-not $SkipInstall) { Invoke-Checked 'npm' @('ci') 'Install locked dependencies' }
Invoke-Checked 'node' @('--test','tests-release.mjs') 'Run CKEFA release checks'
Invoke-Checked 'npm' @('run','lint') 'Run ESLint'
Invoke-Checked 'npm' @('run','build') 'Create production build'
if (-not (Test-Path -LiteralPath (Join-Path $PSScriptRoot 'dist/index.html'))) { throw 'Build completed but dist/index.html is missing.' }
Write-Host "`nLocal build checks passed. Preview the site with: npm run preview" -ForegroundColor Green
Write-Host 'Netlify form delivery and analytics still require live-site configuration and verification.' -ForegroundColor Yellow
