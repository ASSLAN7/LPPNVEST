// version-check.js

const fs = require('fs');
const semver = require('semver');

const currentVersion = process.version;
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const expectedVersion = packageJson.engines?.node;

if (!expectedVersion) {
  console.warn('⚠️ Keine Node-Version in package.json definiert.');
} else if (!semver.satisfies(currentVersion, expectedVersion)) {
  console.error(`❌ Inkompatible Node-Version erkannt: ${currentVersion}`);
  console.error(`👉 Erwartet wird: ${expectedVersion}`);
  process.exit(1);
} else {
  console.log(`✅ Node-Version kompatibel: ${currentVersion}`);
}
