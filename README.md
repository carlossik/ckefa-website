# CKEFA Software Solutions Ltd website

React + Vite single-page site deployed on Netlify.

**For the current upgrade, go directly to [README-DEPLOY-TODAY.md](README-DEPLOY-TODAY.md).**

To verify on Windows: `powershell -ExecutionPolicy Bypass -File .\VERIFY-CKEFA-RELEASE.ps1`

For normal development:

```sh
npm ci
npm run dev
npm run lint
npm run build
```

Netlify's form detection must be enabled after deployment; email notifications and the optional Cloudflare analytics beacon need their own account-side setup. Do not assume a working frontend form guarantees submissions have been delivered.
