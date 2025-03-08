const { execSync } = require('child_process');

console.log('Installing dependencies with proper configuration...');

// First attempt regular installation
try {
  execSync('npm install --no-package-lock --force', { stdio: 'inherit' });
  console.log('Successfully installed all dependencies');
} catch (error) {
  console.log('Initial installation attempt failed, trying fallback approach...');
  
  // If that fails, try a more specific approach
  try {
    // Install core dependencies first
    execSync('npm install --no-package-lock --force next react react-dom', { stdio: 'inherit' });
    
    // Make sure tailwindcss and related packages are installed
    execSync('npm install --no-package-lock --force tailwindcss postcss autoprefixer', { stdio: 'inherit' });
    
    // Install remaining dependencies
    execSync('npm install --no-package-lock --force', { stdio: 'inherit' });
    
    console.log('Successfully installed dependencies with fallback approach');
  } catch (secondError) {
    console.error('Both installation approaches failed:', secondError);
    process.exit(1);
  }
} 