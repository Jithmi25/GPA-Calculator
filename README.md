# 📚 GPA Calculator

A modern, secure web application for calculating and tracking your GPA across semesters. Built with Firebase, Vite, and Google Sign-In for seamless authentication and data synchronization.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active%20Development-brightgreen)

---

## ✨ Features

### Core Functionality

- 📊 **GPA Calculator** - Calculate semester and cumulative GPA
- 📈 **Analytics Dashboard** - Visualize your academic progress with charts
- 💾 **Semester Management** - Create, edit, and delete semesters
- 📝 **Course Tracking** - Add/remove courses with grades and credits
- 📋 **Grade History** - View all past grades and calculations
- 🎓 **Grade Info Reference** - Grade scales and conversion information

### User Experience

- 🌙 **Dark/Light Mode** - Toggle between themes
- 📱 **Fully Responsive** - Works seamlessly on mobile and desktop
- 🔄 **Cloud Sync** - All data synced with Firebase
- ⚡ **Fast & Instant** - Built with Vite for optimal performance
- 🔐 **Secure** - Firebase Authentication with Google Sign-In

### Data Management

- 🔑 **Google Authentication** - Sign in with your Google account
- 👤 **Guest Mode** - Calculate without signing in
- ☁️ **Cloud Storage** - Data persisted in Firebase Realtime Database
- 📊 **Export Ready** - Easy access to your academic data

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- A Firebase project (free tier available)
- Google account (for Google Sign-In setup)

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/GPA-Calculator.git
cd GPA-Calculator
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

```bash
# Copy the example file
cp .env.example .env

# Edit .env with your Firebase credentials
# Get them from Firebase Console: https://console.firebase.google.com/
```

4. **Start Development Server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔒 Security

### Firebase API Key Configuration

Firebase configuration is managed through `firebase-config.js`:

```bash
# Copy the example configuration
cp firebase-config.example.js firebase-config.js

# Edit firebase-config.js with your Firebase credentials
```

**Important Note:** Firebase web API keys are **public by design** and safe to expose in client-side code. Security is enforced through:

- ✅ Firebase Security Rules (see `database.rules.json`)
- ✅ User authentication requirements
- ✅ Domain restrictions in Firebase Console

The `firebase-config.js` file is gitignored for cleaner repository management, not for security reasons. See [SECURITY.md](SECURITY.md) for detailed security information.

---

## 📖 Setup Guide

### Firebase Configuration

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create Project"
   - Enter project name (e.g., "GPA Calculator")
   - Enable Google Analytics (optional)

2. **Get Firebase Credentials**
   - Go to Project Settings (⚙️ icon)
   - Copy your web app configuration
   - Add the values to `.env` file

3. **Enable Google Sign-In**
   - Go to **Authentication** → **Sign-In Method**
   - Enable **Google** provider
   - Add project name and support email
   - Save changes

4. **Configure Authorized Domains**
   - In **Authentication** → **Settings** → **Authorized Domains**
   - Add `localhost` and `localhost:5173` for development
   - Add your production domain later

5. **Set Up Realtime Database**
   - Go to **Realtime Database**
   - Create database in test mode (for development)
   - Update security rules for production:
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

📖 **Full Setup Guide**: See [GOOGLE_LOGIN_SETUP.md](GOOGLE_LOGIN_SETUP.md)

---

## 🛠️ Development

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new dependencies
npm install
```

### Project Structure

```
GPA-Calculator/
├── index.html                   # Main application
├── login.html                   # Google Sign-In page
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
├── .env                        # Firebase credentials (secret)
├── .env.example                # Template for .env
├── README.md                   # This file
├── GOOGLE_LOGIN_SETUP.md       # Authentication setup
└── SETUP.md                    # Original setup guide
```

### Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Vite
- **Authentication**: Firebase Auth + Google Sign-In
- **Database**: Firebase Realtime Database
- **Hosting**: Ready for Firebase Hosting / Vercel / Netlify
- **Styling**: CSS3 with CSS Variables for theming

---

## 🤝 Contributing

We'd love to have you contribute! Whether you're fixing bugs, adding features, or improving documentation, all contributions are welcome.

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button on GitHub
   - Clone your fork: `git clone https://github.com/yourusername/GPA-Calculator.git`

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Test your changes locally

4. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add: amazing-feature description"
   ```

5. **Push to Your Fork**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe what you changed and why
   - Wait for review and feedback

### Contribution Guidelines

- ✅ Write descriptive commit messages
- ✅ Keep commits focused on one feature/bug fix
- ✅ Test changes in both light and dark modes
- ✅ Test on mobile and desktop
- ✅ Update documentation if needed
- ✅ No console errors or warnings

### Code Style

```javascript
// Use arrow functions
const calculateGPA = (courses) => {
  // Clear variable names
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  return totalCredits > 0 ? gpa : 0;
};

// Use meaningful names
const semester = {
  name: "Fall 2025",
  courses: [],
  gpa: 0.0,
};
```

---

## 📋 Feature Requests & Bug Reports

Found a bug or have an idea? Help us improve!

### Report a Bug

1. Check if the bug was already reported in [Issues](https://github.com/yourusername/GPA-Calculator/issues)
2. Click "New Issue" → select "Bug Report"
3. Describe the bug in detail:
   - What were you trying to do?
   - What happened instead?
   - Steps to reproduce
   - Browser and device info

### Request a Feature

1. Check if the feature was already requested
2. Click "New Issue" → select "Feature Request"
3. Describe the feature:
   - What problem does it solve?
   - How would you use it?
   - Rough idea of how it might work

---

## 👥 Collaborators

We're actively looking for collaborators! Here are some areas where we could use help:

### Wanted: Developers

- 🐛 **Bug Fixes** - Find and fix issues
- ✨ **New Features** - Add cool functionality
- 🎨 **UI/UX Improvements** - Make it look and feel better
- 📊 **Advanced Analytics** - Better charts and insights

### Wanted: Designers

- 🎨 **UI Design** - Improve visual appearance
- 📱 **Mobile UX** - Optimize for mobile devices
- 🌈 **Themes** - Create additional color schemes
- 📐 **Wireframes** - Plan out new features

### Wanted: Documentation

- 📝 **Write Guides** - Create tutorials for users
- 🌐 **Translate** - Help with internationalization
- 👨‍💻 **Code Comments** - Document complex functions
- 📚 **API Docs** - Document Firebase integration

### Areas for Improvement

- [ ] Unit tests and integration tests
- [ ] PWA support (offline mode)
- [ ] Multiple semester view
- [ ] Grade prediction tool
- [ ] GPA trend analysis
- [ ] Export to PDF
- [ ] API endpoint for mobile app
- [ ] Accessibility improvements (WCAG)
- [ ] Performance optimization
- [ ] Internationalization (i18n)

---

## 📞 Get in Touch

Want to collaborate or just have questions?

- **GitHub Issues**: [Report bugs or request features](https://github.com/yourusername/GPA-Calculator/issues)
- **GitHub Discussions**: [Join our community](https://github.com/yourusername/GPA-Calculator/discussions)
- **Email**: your-email@example.com
- **Twitter**: [@yourusername](https://twitter.com/yourusername)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What You Can Do

✅ Use for personal projects  
✅ Modify and redistribute  
✅ Use commercially  
✅ Private use

### What You Must Do

📋 Include license and copyright notice  
📋 State significant changes

---

## 🔐 Security

### Reporting Security Issues

⚠️ **Do not** open a public GitHub issue for security vulnerabilities.

Instead, email security concerns to: **your-email@example.com**

We take security seriously and will respond within 24 hours.

### Security Best Practices

- ✅ Firebase credentials stored in `.env` (never committed)
- ✅ Google OAuth 2.0 for secure authentication
- ✅ Firebase Security Rules protect user data
- ✅ HTTPS enforced in production
- ✅ No sensitive data in browser console

---

## 🎯 Roadmap

### v1.0 (Current)

- ✅ GPA calculation and tracking
- ✅ Google Sign-In authentication
- ✅ Firebase cloud sync
- ✅ Analytics dashboard
- ✅ Dark/light mode

### v1.1 (Planned)

- 📋 Advanced analytics charts
- 📊 GPA prediction tool
- 🎯 Goal setting and tracking
- 📤 Export to PDF
- 🔔 Grade milestone notifications

### v2.0 (Future)

- 📱 Mobile app (React Native)
- 🌐 Multi-language support
- 🔄 Real-time collaboration
- 📚 Course recommendations
- 🎓 University profile integration

---

## 💡 How to Get Started Contributing

**New to Open Source?** No problem! Here's how to start:

1. **Pick an Issue**
   - Look for ["good first issue"](https://github.com/yourusername/GPA-Calculator/labels/good%20first%20issue) label
   - Comment: "I'd like to work on this"
   - We'll provide guidance!

2. **Set Up Locally**

   ```bash
   git clone https://github.com/your-username/GPA-Calculator.git
   cd GPA-Calculator
   npm install
   npm run dev
   ```

3. **Make Changes**
   - Edit files
   - Test locally
   - Make sure it works!

4. **Submit Pull Request**
   - Describe what you changed
   - Reference the issue number
   - We'll review and merge! 🎉

**Questions?** Open an issue or email us. We're here to help!

---

## 🙌 Acknowledgments

- Built with ❤️ using [Vite](https://vitejs.dev/)
- Authentication powered by [Firebase](https://firebase.google.com/)
- Sign-In by [Google Identity](https://developers.google.com/identity)
- Inspired by the academic community

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/yourusername/GPA-Calculator?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/GPA-Calculator?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/GPA-Calculator)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yourusername/GPA-Calculator)

---

## 📝 Recent Updates

- **Feb 27, 2026** - Google Sign-In integration complete 🎉
- **Feb 25, 2026** - Firebase authentication setup
- **Feb 20, 2026** - Project initialization with Vite

---

**Star ⭐ us on GitHub to stay updated!**

---

<div align="center">

Made with 💜 by the GPA Calculator Community

[⬆ back to top](#-gpa-calculator)

</div>
