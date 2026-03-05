// Firebase Configuration
// Reads from environment variables (VITE_FIREBASE_*)
// For local development: set in .env file
// For production: set in your hosting platform (Vercel, Netlify, etc.)

export const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyA4F9ZLu4UBm-VzKcQMqNnJXDivtH84PKA',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'gpacalculator-7643e.firebaseapp.com',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'gpacalculator-7643e',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'gpacalculator-7643e.firebasestorage.app',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '151599809218',
    appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:151599809218:web:3e53266dc8a1312814b15b',
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-XDW66KYDPD',
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'https://gpacalculator-7643e-default-rtdb.asia-southeast1.firebasedatabase.app'
};
