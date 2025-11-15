# GitHub Actions Workflows - Setup Guide

## 📋 Overview
Three automated GitHub Actions workflows have been created for your project:

1. **build-pr.yml** - PR Build & Test
2. **deploy.yml** - Production Deployment
3. **lint-test.yml** - Linting & Testing

---

## 🔄 Workflow 1: Build on Pull Request (`build-pr.yml`)

### Triggers
- When a **Pull Request is created** from any branch to `main`
- When a PR is **updated** (new commits)
- When a PR is **reopened**

### What It Does
```
✅ Checks out code
✅ Sets up Node.js 18.x
✅ Installs dependencies (npm ci)
✅ Runs ESLint (npm run lint --fix)
✅ Builds the project (npm run build)
✅ Uploads build artifacts (7-day retention)
✅ Comments on PR with build status
```

### Output
- **Artifacts**: Build output stored for 7 days
- **Comment**: PR gets automatic comment with build status and logs link
- **Status**: Check shows pass/fail

### Example Comment
```
✅ Build Successful!

View build logs: https://github.com/vipji/appV2/actions/runs/...
Build artifacts are available for download (retained for 7 days).
```

---

## 🚀 Workflow 2: Deploy to Production (`deploy.yml`)

### Triggers
- When code is **pushed to `main` branch**
- Only runs on successful merges

### What It Does
```
✅ Checks out code
✅ Sets up Node.js 18.x
✅ Installs dependencies
✅ Runs ESLint with auto-fix
✅ Builds the project
✅ Deploys to GitHub Pages
✅ Creates GitHub Release
✅ Sends deployment notifications
```

### Deployment Details
- **Deploy Location**: GitHub Pages at `https://vipji.github.io/appV2/`
- **Publish Directory**: `./dist/`
- **Force Orphan**: Clean history (fresh deployment each time)

### Release Creation
Automatically creates a GitHub Release with:
- Version tag: `release-v{number}`
- Release notes with features and deployment info
- Link to deployed site

### On Failure
- Creates an issue in GitHub with failure notification
- Includes logs link for debugging

---

## 🧪 Workflow 3: Lint and Test (`lint-test.yml`)

### Triggers
- On **Pull Requests** to `main` or `develop`
- On **Push** to `main` or `develop`

### Runs On
- Node.js 18.x
- Node.js 20.x (tests compatibility)

### What It Does
```
✅ Checks out code
✅ Sets up Node.js
✅ Installs dependencies
✅ Runs ESLint
✅ Builds project
✅ Checks bundle size
✅ Reports job status
```

### Bundle Size Check
- Warns if bundle > 200MB
- Suggests code splitting if needed

---

## 📊 Workflow Execution Flow

```
┌─────────────────────────────────────────┐
│  Developer creates PR from develop → main
└──────────────────┬──────────────────────┘
                   │
                   ↓
        ┌──────────────────────┐
        │ build-pr.yml starts  │
        │ - Lint & Build       │
        │ - Upload artifacts   │
        │ - Comment PR         │
        └──────────┬───────────┘
                   │
        ┌──────────↓──────────┐
        │   Manual Review     │
        │   & Testing         │
        └──────────┬──────────┘
                   │
                   ↓
        ┌──────────────────────┐
        │  PR Approved & Merge │
        │    to main branch    │
        └──────────┬───────────┘
                   │
                   ↓
        ┌──────────────────────┐
        │ deploy.yml starts    │
        │ - Build              │
        │ - Deploy to Pages    │
        │ - Create Release     │
        │ - Send Notifications │
        └──────────┬───────────┘
                   │
                   ↓
        ┌──────────────────────┐
        │ 🎉 Live in Production
        │ https://vipji...     │
        └──────────────────────┘
```

---

## ⚙️ GitHub Pages Setup

### Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Select:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` (auto-created by workflow)
   - **Folder**: `/ (root)`
3. Click **Save**

Your site will be live at: `https://vipji.github.io/appV2/`

---

## 🔑 Secrets & Permissions

### Required Secrets
- `GITHUB_TOKEN` ✅ (Built-in, no setup needed)

### Permissions Needed
- ✅ Read code
- ✅ Write to deployments
- ✅ Create releases
- ✅ Comment on PRs

These are default for GitHub Actions - no additional setup needed!

---

## 📝 Workflow Configuration Details

### Node.js Caching
All workflows cache npm dependencies for faster builds:
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 18.x
    cache: 'npm'
```

### Build Artifacts Retention
PR builds retain artifacts for 7 days:
```yaml
retention-days: 7
```

### Auto-fix Linting
Workflows attempt to auto-fix linting issues:
```bash
npm run lint --fix
```

---

## 🧪 Manual Testing Workflows

### Test locally before pushing:
```bash
# Install dependencies
npm install

# Run linter
npm run lint

# Build
npm run build

# Preview build
npm run preview
```

---

## 📈 Monitoring Workflows

### View Workflow Status
1. Go to **Actions** tab on GitHub
2. Select workflow to view
3. Click on specific run to see details
4. View logs for each step

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Build fails on lint | Run `npm run lint --fix` locally, commit |
| Deployment fails | Check logs in Actions tab for error details |
| Artifacts missing | Workflows older than 7 days auto-delete |
| Release not created | Check GitHub token permissions |

---

## 🔔 Notifications

Workflows automatically notify via:
- ✅ PR comments with build status
- ✅ GitHub releases on deployment
- ✅ Issues created on deployment failure
- ✅ GitHub checks (pass/fail indicators)

---

## 🎯 Quick Reference Commands

```bash
# View workflow status
git log --oneline | head -10

# Check current branch
git branch

# Create PR from develop to main
# (Use GitHub UI or GitHub CLI)
gh pr create --base main --head develop

# View all workflows
ls -la .github/workflows/

# Manually trigger workflow (if enabled)
gh workflow run build-pr.yml
```

---

## 📚 Next Steps

1. ✅ Commit and push workflows
2. ✅ Create a test PR from develop → main
3. ✅ Watch workflows execute in Actions tab
4. ✅ Review PR comments from bot
5. ✅ Merge when ready
6. ✅ Monitor deployment
7. ✅ Verify site is live

---

**Workflows are now fully configured and ready to use! 🚀**
