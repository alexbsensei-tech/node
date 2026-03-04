const { exec } = require("child_process");

function check(command, name) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ ${name} is not installed or not found in PATH.`);
      return;
    }
    if (stderr) {
      console.error(`⚠️ Error while checking ${name}: ${stderr}`);
      return;
    }
    console.log(`✅ ${name} is installed. Version: ${stdout.trim()}`);
  });
}

function checkEnvVar(varName) {
  const value = process.env[varName];
  if (value) {
    console.log(`🔧 Environment variable ${varName} is set: ${value}`);
  } else {
    console.warn(`⚠️ Environment variable ${varName} is NOT set.`);
  }
}

// Run checks
check("node -v", "Node.js");
check("npm -v", "npm");

// Common environment variables on Windows
checkEnvVar("PATH");       // PATH should include Node.js installation directory
checkEnvVar("NODE_PATH");  // Optional, used for global modules
checkEnvVar("NPM_CONFIG_PREFIX"); // Optional, used for npm global packages
