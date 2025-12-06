# GitHub Upload Instructions

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Enter repository name (e.g., "flavor-restaurant")
3. Choose Public or Private
4. **DO NOT** check "Initialize with README"
5. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, run these commands:

```bash
# Add the remote repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH

If you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Example:
If your username is `johndoe` and repo name is `flavor-restaurant`:

```bash
git remote add origin https://github.com/johndoe/flavor-restaurant.git
git branch -M main
git push -u origin main
```

## Troubleshooting

If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys for GitHub

