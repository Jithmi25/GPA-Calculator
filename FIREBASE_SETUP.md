# Firebase Setup Guide for GPA Calculator

## Prerequisites

- Create a free account at [Firebase Console](https://console.firebase.google.com)
- Create a new Firebase project

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Give it a name (e.g., "GPA Calculator")
4. Continue through the setup (you can disable Google Analytics if you want)
5. Create the project

## Step 2: Get Your Firebase Credentials

### For Web App:

1. In your Firebase project, click the **Web** icon (</>) to add Firebase to your web app
2. Copy the Firebase config object
3. You'll see something like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
};
```

## Step 3: Enable Realtime Database

1. In Firebase Console, go to **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose region closest to you
4. Start in **Test mode** (we'll secure it in the next step)
5. Click **Enable**

## Step 4: Set Up Database Security Rules

Your database needs security rules to protect user data:

1. In **Realtime Database**, go to the **Rules** tab
2. Replace the default rules with:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
        "semesters": {
          ".validate": "newData.hasChildren(['name', 'gpa', 'courses', 'date'])",
          "$semester": {
            ".validate": "newData.hasChildren(['name', 'gpa', 'courses', 'date'])"
          }
        },
        "history": {
          "$history": {
            ".validate": "newData.hasChildren(['name', 'gpa', 'courses', 'date'])"
          }
        }
      }
    }
  }
}
```

3. Click **Publish**

## Step 5: Enable Anonymous Authentication

1. In Firebase Console, go to **Build** → **Authentication**
2. Click **Get started**
3. Go to the **Sign-in method** tab
4. Find **Anonymous** and click on it
5. Toggle **Enable** ON
6. Click **Save**

## Step 6: Update the Application

1. Open `index.html` in a text editor
2. Find these lines near the top of the `<script>` section:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

3. Replace each `YOUR_*` value with the corresponding value from your Firebase config object

Example:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "gpa-calculator.firebaseapp.com",
  projectId: "gpa-calculator-123",
  storageBucket: "gpa-calculator-123.appspot.com",
  messagingSenderId: "12356789",
  appId: "1:123456789:web:abcde23456",
};
```

## Step 7: Test the Setup

1. Open the application in your browser
2. Save a semester with some courses
3. Check Firebase Console:
   - Go to **Realtime Database**
   - You should see your data in the `users` → `[auto-generated-user-id]` → `semesters` path
4. Refresh the page - your data should still appear!

## Verification Checklist

- [ ] Firebase project created
- [ ] Realtime Database enabled
- [ ] Anonymous Authentication enabled
- [ ] Database rules published
- [ ] Firebase credentials added to index.html
- [ ] Data appears in Firebase Console after saving
- [ ] Data persists after page refresh

## Troubleshooting

### "Firebase credentials not configured"

- Make sure you've copied all 6 values from your Firebase config
- Check for extra spaces or typos
- Make sure strings are wrapped in quotes

### "Anonymous sign-in failed" or "Permission denied"

- Go to **Authentication** → **Sign-in method**
- Make sure **Anonymous** is enabled
- Check that database rules are published correctly

### "No data appears in Firebase Console"

- Open browser console (F12) and check for errors
- Make sure `isFirebaseReady` is `true` in the console
- Verify the rules are correctly published

### "Cannot read from database"

- Check database rules - they should start with `"read": "$uid === auth.uid"`
- Make sure the user is authenticated (check in Authentication tab)
- Try refreshing the page

## Advanced: Use Email/Password Instead of Anonymous

If you prefer email/password authentication:

1. Enable Email/Password in **Authentication** → **Sign-in method**

2. Replace the `initFirebase()` function:

```javascript
async function initFirebase() {
  if (firebaseConfig.apiKey === "YOUR_API_KEY") {
    console.warn(
      "Firebase credentials not configured. Using localStorage as fallback.",
    );
    isFirebaseReady = false;
    return;
  }

  try {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.database();
    isFirebaseReady = true;

    // Show login dialog
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    if (email && password) {
      try {
        // Try to sign in
        await auth.signInWithEmailAndPassword(email, password);
        console.log("Sign-in successful");
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          // Create account if doesn't exist
          await auth.createUserWithEmailAndPassword(email, password);
          console.log("Account created and signed in");
        } else {
          throw error;
        }
      }
    }
  } catch (error) {
    console.error("Firebase initialization error:", error);
    isFirebaseReady = false;
  }
}
```

## Database Structure

Your data will be organized like this:

```
firebase_root/
├── users/
│   └── [user_id]/
│       ├── semesters/
│       │   ├── [semester_key]/
│       │   │   ├── name: "Fall 2023"
│       │   │   ├── gpa: 3.85
│       │   │   ├── courses: [...]
│       │   │   └── date: "2024-02-25T..."
│       │   └── [semester_key]/
│       │       └── ...
│       └── history/
│           ├── [history_key]/
│           │   ├── name: "Fall 2023"
│           │   ├── gpa: 3.85
│           │   ├── courses: [...]
│           │   └── date: "2024-02-25T..."
│           └── ...
```

## Free Firebase Limits

Firebase's free tier includes:

- **Realtime Database**: 100 simultaneous connections, 10 GB storage (per month)
- **Authentication**: Unlimited anonymous users
- **Hosting**: 1 GB storage, 10 GB/month bandwidth (optional)

This is more than enough for personal GPA tracking!

## Pricing (If you exceed free tier)

- Then you'll only pay for what you use
- **Read/Write operations**: $1 per 100,000 operations
- **Storage**: $5 per GB per month

For personal use, you'll likely stay within the free tier indefinitely.

## Next Steps

1. ✅ Set up Firebase
2. ✅ Enable Realtime Database
3. ✅ Configure security rules
4. ✅ Add credentials to index.html
5. Start using the app!

All your data will now be securely stored in Firebase and synced across devices!
