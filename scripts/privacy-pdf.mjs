// Renders the /privacy page to static/docs/greylight-privacy-policy.pdf using a local Chrome or Edge.
// Usage: start the site (npm run dev), then: npm run pdf:privacy [-- http://localhost:5173]
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const base = process.argv[2] || 'http://localhost:5173';
const out = resolve('static/docs/greylight-privacy-policy.pdf');
const candidates = [
	process.env.CHROME_PATH,
	'C:/Program Files/Google/Chrome/Application/chrome.exe',
	'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium'
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) throw new Error('No Chrome or Edge found. Set CHROME_PATH to your browser executable.');

mkdirSync(resolve('static/docs'), { recursive: true });
execFileSync(
	browser,
	['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=5000', `--print-to-pdf=${out}`, `${base}/privacy`],
	{ stdio: 'inherit' }
);
console.log(`Saved ${out} (${Math.round(statSync(out).size / 1024)} KB)`);
