# Deploying to Vercel

This guide will help you deploy your GPA Calculator to Vercel.

## Prerequisites

- A Vercel account (free tier available at [vercel.com](https://vercel.com))
- Your Firebase project credentials

## Deployment Steps

### 1. Push Your Code to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GPA Calculator repository
4. Click "Import"

### 3. Configure Environment Variables

In the Vercel project settings, add these environment variables:

| Variable Name                       | Value                               | Where to Find                        |
| ----------------------------------- | ----------------------------------- | ------------------------------------ |
| `VITE_FIREBASE_API_KEY`             | Your API Key                        | Firebase Console → Project Settings  |
| `VITE_FIREBASE_AUTH_DOMAIN`         | your-project.firebaseapp.com        | Firebase Console → Project Settings  |
| `VITE_FIREBASE_PROJECT_ID`          | your-project-id                     | Firebase Console → Project Settings  |
| `VITE_FIREBASE_STORAGE_BUCKET`      | your-project.firebasestorage.app    | Firebase Console → Project Settings  |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Your sender ID                      | Firebase Console → Project Settings  |
| `VITE_FIREBASE_APP_ID`              | Your app ID                         | Firebase Console → Project Settings  |
| `VITE_FIREBASE_MEASUREMENT_ID`      | Your measurement ID                 | Firebase Console → Project Settings  |
| `VITE_FIREBASE_DATABASE_URL`        | https://your-project.firebaseio.com | Firebase Console → Realtime Database |

**To add environment variables in Vercel:**

1. Go to your project dashboard on Vercel
2. Click "Settings"
3. Click "Environment Variables"
4. Add each variable one by one
5. Make sure to select all environments (Production, Preview, Development)

### 4. Configure Firebase for Production

#### Add Vercel Domain to Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Authentication** → **Settings** → **Authorized Domains**
4. Click "Add Domain"
5. Add your Vercel domain (e.g., `your-project.vercel.app`)

#### Update Firebase Security Rules

Your security rules should already be configured, but verify:

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

### 5. Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Visit your deployed site at `your-project.vercel.app`

## Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## Troubleshooting

### Build Fails with "Could not resolve ./firebase-config.js"

Make sure all `VITE_FIREBASE_*` environment variables are set in Vercel.

### "Permission Denied" after deployment

Check that:

1. Firebase Security Rules are deployed
2. Your Vercel domain is added to Firebase Authorized Domains
3. Firebase Authentication is enabled

### Google Sign-In doesn't work

1. Add your Vercel domain to Firebase Authorized Domains
2. Wait a few minutes for DNS propagation
3. Clear browser cache and try again

## Automatic Deployments

Vercel automatically deploys:

- **Production:** When you push to `main` branch
- **Preview:** When you create a pull request

## Custom Domain (Optional)

1. Go to Vercel project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Add custom domain to Firebase Authorized Domains

## Environment Variables for Different Environments

You can set different Firebase projects for:

- **Production:** Main Firebase project
- **Preview:** Staging Firebase project
- **Development:** Local Firebase emulator

Just set different values for each environment in Vercel.

## Support

If you encounter issues:

1. Check Vercel build logs
2. Check browser console for errors
3. Verify all environment variables are set correctly
4. Check Firebase Console for errors

---

**Next Steps:**

- [Configure Custom Domain](https://vercel.com/docs/concepts/projects/domains)
- [Set up CI/CD](https://vercel.com/docs/concepts/git)
- [Monitor Performance](https://vercel.com/docs/concepts/analytics)
