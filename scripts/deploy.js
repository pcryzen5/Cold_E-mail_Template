import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.log('Building project before deploying...');
  execSync('npm run build', { stdio: 'inherit' });
}

console.log('Preparing to push dist/ to gh-pages branch...');

// Clean any leftover git metadata in dist
if (fs.existsSync(path.join(distDir, '.git'))) {
  fs.rmSync(path.join(distDir, '.git'), { recursive: true, force: true });
}

// Initialize clean repository inside dist
execSync('git init', { cwd: distDir, stdio: 'pipe' });
execSync('git checkout -B gh-pages', { cwd: distDir, stdio: 'pipe' });
execSync('git add -A', { cwd: distDir, stdio: 'pipe' });
execSync('git commit -m "Deploy to GitHub Pages"', { cwd: distDir, stdio: 'pipe' });

// Get origin remote URL from root repo
const remoteUrl = execSync('git config --get remote.origin.url').toString().trim();
console.log(`Pushing to ${remoteUrl} (gh-pages)...`);
execSync(`git push -f ${remoteUrl} gh-pages`, { cwd: distDir, stdio: 'inherit' });

// Clean up temporary .git directory in dist
fs.rmSync(path.join(distDir, '.git'), { recursive: true, force: true });

console.log('\nSuccessfully published to gh-pages branch!');
console.log('Site URL: https://pcryzen5.github.io/Cold_E-mail_Template/');
