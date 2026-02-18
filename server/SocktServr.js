// Wrapper for deployments expecting /server/SocktServr.js
// This file forwards to the actual implementation in app/server/SocktServr.js
try {
  require('../app/server/SocktServr.js');
} catch (err) {
  console.error('Failed to load ../app/server/SocktServr.js from /server/SocktServr.js:', err);
  throw err;
}
