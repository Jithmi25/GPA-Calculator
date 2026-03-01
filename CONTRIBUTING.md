# Contributing to GPA Calculator

First off, thank you for considering contributing to GPA Calculator! It's people like you that make GPA Calculator such a great tool.

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive at all times.

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing opinions and experiences
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment, insults, or derogatory comments
- Trolling, spamming, or self-promotion
- Private attacks of any kind
- Publishing others' private information without consent
- Any behavior or language that excludes people

---

## How to Contribute

### 1. Reporting Bugs

Before creating bug reports, please check the issue list - you might find out that you don't need to create one. When creating a bug report, include as many details as possible:

**Include:**

- Clear, descriptive title
- Exact steps to reproduce the problem
- What happened and what you expected to happen
- Screenshots or error messages
- Your environment (browser, OS, device)
- Chrome DevTools console errors (if any)

**Example:**

```
Title: GPA calculation shows incorrect result for 3-credit course

Steps to reproduce:
1. Go to GPA Calculator
2. Sign in with Google
3. Create a new semester
4. Add course: "Math 101", Grade "A", Credits "3"
5. Add course: "English 101", Grade "B", Credits "4"
6. Click Calculate

Expected: GPA should be 3.57 (approximately)
Actual: GPA shows 3.12

Environment:
- Browser: Chrome 119.0.6045.123
- OS: Windows 11
- Device: Desktop
```

### 2. Suggesting Enhancements

Enhancement suggestions are tracked as GitHub Issues. When creating an enhancement request:

**Include:**

- Clear, descriptive title
- Detailed description of the suggested enhancement
- Why this enhancement would be useful
- Possible implementation approaches
- Examples of similar features in other projects

**Example:**

```
Title: Add GPA trend chart showing semester-by-semester progression

Description:
Currently, analytics only show overall statistics. A line chart showing
GPA trends across semesters would help visualize academic improvement.

Use Case:
Students want to see if their GPA improved over time and identify
when they excelled or struggled.

Implementation:
- Use Chart.js library (already used in project)
- Add "Trend" tab to analytics section
- Display GPA for each semester as points on line chart
```

### 3. Pull Requests

**Process:**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly (light mode, dark mode, mobile, desktop)
5. Commit with clear messages (`git commit -m 'Add: amazing feature'`)
6. Push to your fork (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

**DO:**

- ✅ Write clear, meaningful commit messages
- ✅ Test changes in multiple browsers
- ✅ Test on mobile devices
- ✅ Update documentation if needed
- ✅ Keep changes focused on one feature/issue
- ✅ Reference related issues (#123)

**DON'T:**

- ❌ Make unrelated changes in one PR
- ❌ Commit sensitive data or API keys
- ❌ Ignore code style conventions
- ❌ Create huge PRs (keep them under 400 lines if possible)
- ❌ Merge without waiting for reviews

**PR Template:**

```
## Description
A clear description of what you've changed and why.

## Related Issues
Closes #(issue number)

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## Testing
Describe how you tested your changes:
- [ ] GPA calculation is correct
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots or GIFs of your changes

## Checklist
- [ ] My code follows the code style guidelines
- [ ] I have tested my changes locally
- [ ] I have updated documentation if needed
- [ ] No console errors or warnings
```

---

## Development Guide

### Setup Your Development Environment

```bash
# 1. Fork and clone
git clone https://github.com/your-username/GPA-Calculator.git
cd GPA-Calculator

# 2. Install dependencies
npm install

# 3. Create .env file with Firebase credentials
cp .env.example .env
# Edit .env with your Firebase project credentials

# 4. Start development server
npm run dev

# 5. Open http://localhost:5173 in your browser
```

### Project Structure

```
src/
├── index.html           # Main app
├── login.html          # Login page
├── vite.config.js      # Vite config
└── package.json        # Dependencies
```

### Code Style

**JavaScript:**

```javascript
// Use const/let (not var)
const calculateGPA = (courses) => {
  // Clear variable names
  let totalPoints = 0;
  let totalCredits = 0;

  for (const course of courses) {
    totalPoints += course.gradePoints * course.credits;
    totalCredits += course.credits;
  }

  return totalCredits > 0 ? totalPoints / totalCredits : 0;
};

// Use template literals
const message = `User ${name} has GPA of ${gpa.toFixed(2)}`;

// Prefer async/await over promises
async function saveSemester(semester) {
  try {
    await db.ref(`users/${userId}/semesters`).push(semester);
  } catch (error) {
    console.error("Save failed:", error);
  }
}
```

**HTML/CSS:**

```html
<!-- Use semantic HTML -->
<main role="main">
  <section class="gpa-calculator">
    <h1>Calculate Your GPA</h1>
  </section>
</main>

<!-- CSS uses CSS variables for consistency -->
<style>
  :root {
    --primary-color: #1e3a8a;
    --secondary-color: #3b82f6;
  }

  .button-primary {
    background: var(--primary-color);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
  }
</style>
```

**Comments:**

```javascript
// Good: Explain WHY, not WHAT
// Firebase persistence must use LOCAL to survive page refreshes
await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// Bad: Comments that just repeat code
// Set persistence to LOCAL
auth.setPersistence("LOCAL");
```

### Testing Your Changes

Before submitting a PR, test:

- [ ] **Light Mode**: Click theme toggle, verify all elements readable
- [ ] **Dark Mode**: Click theme toggle again, verify contrast
- [ ] **Mobile (320px)**: Resize to mobile width, verify responsive
- [ ] **Tablet (768px)**: Test on tablet breakpoint
- [ ] **Desktop**: Full width testing
- [ ] **All Tabs**: Calculator, Semesters, Analytics, History, Grade Info
- [ ] **Add/Edit/Delete**: Test all CRUD operations
- [ ] **Console**: Open DevTools, confirm no errors/warnings
- [ ] **Browser Support**: Test in Chrome, Firefox, Safari, Edge

### Performance Tips

- Minimize Firebase database calls
- Debounce input handlers
- Use CSS transforms instead of width/height changes
- Avoid memory leaks with proper cleanup
- Cache calculations when possible

---

## Commit Message Guidelines

Use clear commit messages that describe what changed:

```
Format: <Type>: <Description>

Type:
  Add:      New feature
  Fix:      Bug fix
  Update:   Improve existing feature
  Refactor: Code restructuring
  Docs:     Documentation changes
  Style:    Formatting/style changes

Example:
  Add: GPA trend chart to analytics dashboard
  Fix: Dark mode toggle not persisting across page refreshes
  Update: Improve mobile responsiveness of course table
  Refactor: Extract GPA calculation to separate function
  Docs: Add Firebase setup guide
```

---

## Troubleshooting

### "Firebase credentials not configured"

- Make sure `.env` file exists with all VITE*FIREBASE*\* variables
- Restart dev server: `npm run dev`

### Changes not appearing

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart dev server

### Environment variables not loading

- Check .env file syntax (no spaces around =)
- Restart npm dev server
- Variables must start with VITE\_ to be accessible

### Port 5173 already in use

```bash
# Find process using the port
netstat -ano | findstr :5173

# Kill the process (Windows)
taskkill /PID [PID] /F
```

---

## Becoming a Maintainer

We're looking for reliable community members to become maintainers. Maintainers help review PRs, triage issues, and guide the project direction.

**Requirements:**

- Consistent contributions for 3+ months
- Deep understanding of the codebase
- Excellent communication skills
- Commitment to project values

Interested? Email us or ask in a GitHub discussion!

---

## Additional Resources

- **Firebase Docs**: https://firebase.google.com/docs
- **Vite Guide**: https://vitejs.dev/guide/
- **MDN Web Docs**: https://developer.mozilla.org/
- **Google Sign-In**: https://developers.google.com/identity

---

## Questions?

- **GitHub Issues**: Ask in related issue threads
- **GitHub Discussions**: Start a discussion for general questions
- **Email**: your-email@example.com

We're always happy to help new contributors!

---

**Thank you for contributing! 🎉**
