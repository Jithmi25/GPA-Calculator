# Google Login Integration - Setup Guide

## ✅ What's Been Set Up

Your GPA Calculator now includes:

- **Google Sign-In** with Firebase Authentication
- **Guest Login** for users without Google accounts
- **User Profile Display** with logout functionality
- **Automatic Authentication Check** - redirects to login if not authenticated
- **Session Persistence** - users stay logged in on page refresh

---

## 🔧 Firebase Console Configuration

To enable Google Sign-In, go to [Firebase Console](https://console.firebase.google.com/) and follow these steps:

### 1. Enable Google Sign-In Provider

- Go to **Authentication** → **Sign-In Method**
- Click on **Google**
- Toggle **Enable**
- Set **Project name** to: `GPA Calculator`
- Set **Support email** to your email
- Click **Save**

### 2. Add Authorized Domains

- In **Authentication** → **Settings** → **Authorized Domains**
- Add these domains:
  - `localhost` (for local development)
  - `localhost:5173` (for Vite dev server)
  - Your production domain (once deployed)

### 3. Get OAuth Credentials (Google Cloud Console)

- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Select your project
- Go to **APIs & Services** → **Credentials**
- Create an **OAuth 2.0 Client ID** (type: Web Application)
- Add authorized JavaScript origins:
  - `http://localhost:5173`
  - Your production URL
- Copy the **Client ID** (you may need it for additional configuration)

---

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

- Opens at `http://localhost:5173/`
- You'll be redirected to the login page
- Sign in with Google or as a Guest

### Production Build

```bash
npm run build
```

- Creates optimized build in `dist/` folder

### Preview Production Build

```bash
npm run preview
```

---

## 📝 File Structure

```
GPA-Calculator/
├── index.html              # Main GPA Calculator app
├── login.html              # Google Sign-In login page
├── .env                    # Firebase credentials (secure, not in Git)
├── .env.example            # Template for other developers
├── vite.config.js          # Vite build configuration
├── package.json            # Dependencies
└── SETUP.md               # Original setup guide
```

---

## 🔑 How Google Sign-In Works

### Login Flow

1. User visits the app → redirected to `login.html`
2. Clicks "Sign in with Google"
3. Google authentication popup appears
4. User completes Google login
5. Firebase creates/updates user account
6. Redirected back to main app with user profile displayed

### Data Storage

- **User data**: Stored in Firebase Authentication
- **GPA data**: Stored in Firebase Realtime Database under `users/{userId}/`
- **Session info**: Stored in browser sessionStorage

### Guest Login

- Users can click "Continue as Guest"
- Anonymous Firebase account is created
- Data syncs with Firebaseusing anonymous UID
- No Google account required

---

## 🔓 Logout Process

User clicks **Logout** button in the top-right:

1. Confirmation dialog appears
2. Firebase session is terminated
3. SessionStorage is cleared
4. Redirected back to login page

---

## 🛡️ Security Features

✅ **Environment Variables**: Credentials in `.env` are not committed toto Git  
✅ **Firebase Security Rules**: Configure in Firebase Console for data protection  
✅ **Session Persistence**: Uses Firebase LOCAL persistence  
✅ **HTTPS Only**: Google Sign-In works on HTTPS (and localhost for dev)

---

## ⚠️ Firebase Security Rules

After enabling Google Sign-In, update your Firebase Security Rules to protect user data:

Go to **Realtime Database** → **Rules** and use:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

This ensures users can only access their own data.

---

## 🔗 Links to Update

- [Firebase Console - Authentication](https://console.firebase.google.com/u/0/project/_/authentication/providers)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Firebase Documentation](https://firebase.google.com/docs)

---

## ❓ Troubleshooting

### "Sign in popup was blocked"

- Check your browser's popup blocker settings
- Allow popups for `localhost:5173`

### "Firebase credentials not configured"

- Ensure `.env` file has all `VITE_FIREBASE_*` variables
- Run `npm run dev` instead of opening HTML directly

### "User not authenticated, redirecting..."

- Normal behavior if `.env` is empty or missing credentials
- Fill in `.env` with your Firebase config

### Google Sign-In button not working

- Make sure Firebase project exists in Console
- Verify OAuth credentials are created
- Check that authorized domains include your URL

---

## 📱 Feature Overview

| Feature        | Status | Description                  |
| -------------- | ------ | ---------------------------- |
| Google Sign-In | ✅     | Sign in with Google account  |
| Guest Login    | ✅     | Continue without signing in  |
| User Profile   | ✅     | Display user name and avatar |
| Logout         | ✅     | Sign out and return to login |
| Data Sync      | ✅     | Save GPA data to Firebase    |
| Dark Mode      | ✅     | Toggle dark/light theme      |
| Responsive     | ✅     | Works on mobile and desktop  |

---

## 📞 Support

For issues with Firebase setup, visit:

- [Firebase Support](https://firebase.google.com/support)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/firebase)

For issues with Google Sign-In:

- [Google Sign-In Documentation](https://developers.google.com/identity)
