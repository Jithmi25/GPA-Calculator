# Support & Security Guidelines

## 🔐 Firebase API Key Security

### Important: Firebase Web API Keys Are Public By Design

The Firebase API key for web applications is **not a secret** and is designed to be included in client-side code. Firebase security comes from:

1. **Firebase Security Rules** - Control who can read/write data (see `database.rules.json`)
2. **Authentication** - Users must be authenticated to access data
3. **Domain Restrictions** - Restrict which domains can use your Firebase project

### Why This Is Secure

- The API key only identifies your Firebase project
- Firebase Security Rules prevent unauthorized data access
- Even with the API key, users cannot bypass authentication/authorization

### Configuration Management

Configuration is now in `firebase-config.js` (gitignored):

```javascript
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  // ... other config
};
```

**Important:** `firebase-config.js` is gitignored. Use `firebase-config.example.js` as a template.

### Best Security Practices

1. ✅ Ensure Firebase Security Rules are properly configured
2. ✅ Enable domain restrictions in Firebase Console
3. ✅ Monitor Firebase usage regularly
4. ✅ Use Firebase App Check for abuse protection
5. ❌ Don't commit admin SDK credentials (those ARE secret!)

**Reference:** [Firebase Security Best Practices](https://firebase.google.com/docs/rules/basics)

---

## 🆘 Getting Help

### For Usage Questions

**Where to ask:**

- **GitHub Discussions**: Best for general questions
- **GitHub Issues**: For feature requests and bug reports
- **Email**: For personal help needed

**Please include:**

- What you're trying to do
- What you expected to happen
- What actually happened
- Steps to reproduce the issue
- Your environment (browser, OS, etc.)

### For Technical Issues

1. **Search existing issues** first - your problem might already be solved
2. **Check the documentation**:
   - [README.md](README.md) - Overview and quick start
   - [GOOGLE_LOGIN_SETUP.md](GOOGLE_LOGIN_SETUP.md) - Authentication guide
   - [SETUP.md](SETUP.md) - Environment setup
3. **Open a new issue** if you can't find the answer

### Common Issues

**"Sign in popup was blocked"**

- Check your browser's popup blocker
- Allow popups for localhost:5173
- Try in an incognito/private window

**"Firebase credentials not configured"**

- Create `.env` file from `.env.example`
- Fill in all VITE*FIREBASE*\* variables
- Restart dev server

**"Port 5173 already in use"**

```bash
# Find and kill the process
lsof -i :5173  # macOS/Linux
netstat -ano | findstr :5173  # Windows
```

**"Changes not appearing"**

- Hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
- Clear browser cache
- Restart dev server with `npm run dev`

## 🔐 Security

### Reporting Security Vulnerabilities

**IMPORTANT**: Please do NOT open a public GitHub issue for security vulnerabilities.

Instead:

1. Email **your-email@example.com** with details
2. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)
3. We will respond within **24 hours**
4. We will work with you on a fix before public disclosure

We appreciate responsible disclosure and will credit you if you wish!

### Security Best Practices

#### For Users

- ✅ Use strong Google passwords
- ✅ Keep your browser updated
- ✅ Only use HTTPS URLs in production
- ✅ Don't share your Firebase credentials
- ✅ Enable 2FA on your Google account

#### For Developers

- ✅ Never commit `.env` file to Git
- ✅ Rotate Firebase keys periodically
- ✅ Use environment-specific credentials
- ✅ Review Firebase Security Rules regularly
- ✅ Keep dependencies updated: `npm audit fix`
- ✅ Validate all user input
- ✅ Use HTTPS in production

### Firebase Security Rules Template

```json
{
  "rules": {
    "users": {
      "$uid": {
        // Only the user can read their own data
        ".read": "$uid === auth.uid",
        // Only the user can write their own data
        ".write": "$uid === auth.uid",
        // Data must exist before writing
        ".validate": "auth !== null"
      }
    }
  }
}
```

### Dependency Security

Check for vulnerabilities:

```bash
# See vulnerabilities
npm audit

# Automatically fix vulnerabilities
npm audit fix

# Check specific package
npm audit --package [package-name]
```

## 📋 Responsible Disclosure Timeline

1. **Immediate**: We acknowledge receipt of your report
2. **24 hours**: We provide initial assessment
3. **48 hours**: We begin development of a fix
4. **Timeline based on severity**:
   - **Critical**: Fix within 24-48 hours
   - **High**: Fix within 3-5 days
   - **Medium**: Fix within 1-2 weeks
   - **Low**: Fix in next release

5. **Disclosure**: Fixed version released + credit given

## 🎯 Security Features

### Current Protections

- ✅ Firebase Authentication required
- ✅ Per-user data isolation with Security Rules
- ✅ Google OAuth 2.0 for secure sign-in
- ✅ HTTPS enforced (production)
- ✅ Environment variables in `.env` (not committed)
- ✅ No sensitive data in frontend code
- ✅ Session persistence with timeout support

### Future Improvements

- 🔄 CSRF token implementation
- 🔄 Rate limiting on requests
- 🔄 Data encryption at rest
- 🔄 Audit logging
- 🔄 Two-factor authentication support

## 🚨 If You Find a Vulnerability

### Do:

- ✅ Report immediately to security contact
- ✅ Be specific about the issue
- ✅ Provide proof of concept
- ✅ Allow time for patching before disclosure
- ✅ Keep information confidential

### Don't:

- ❌ Publicly disclose on GitHub/Twitter before patch
- ❌ Access data you're not authorized to access
- ❌ Modify system data beyond what's needed to verify
- ❌ Share vulnerability details with others
- ❌ Demand payment or service

## 📞 Contact Information

### Security Issues

📧 **Email**: security@example.com  
🔐 **GPG Key**: Available upon request

### General Support

📧 **Email**: your-email@example.com  
💬 **GitHub**: Open an issue
📱 **Discussions**: For non-urgent questions

### Response Times

- **Security**: 24 hour response guaranteed
- **Bugs**: 48 hour response
- **Questions**: 72 hour response
- **Features**: Reviewed in weekly meetings

---

**Thank you for helping keep GPA Calculator secure! 🛡️**
