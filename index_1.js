const { randomBytes } = require('crypto');

function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = randomBytes(16).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}