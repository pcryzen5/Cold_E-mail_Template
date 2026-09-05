# ColdReach Studio 🚀
### Smart Cold Message & Email Generator for Tech Professionals (React + Vite)

A modern, fast, and responsive React application for generating high-converting cold messages, connection notes, and emails across **WhatsApp**, **LinkedIn**, and **Email**.

---

## 📁 Project Architecture

The codebase is structured cleanly based on modern component and data isolation patterns:

```
Cold_E-mail_Template/
├── public/
│   ├── favicon.svg                          # Site favicon
│   ├── robots.txt                           # Web crawler rules
│   └── site.webmanifest                     # PWA web manifest
├── src/
│   ├── assets/                              # Brand visuals & icons
│   ├── components/
│   │   ├── forms/
│   │   │   └── DynamicMessageForm.jsx       # Dynamic form inputs matching template fields
│   │   ├── sections/
│   │   │   ├── CategorySelector.jsx         # Outreach categories selector
│   │   │   ├── PlatformSelector.jsx         # WhatsApp, LinkedIn, Email selector
│   │   │   ├── MessagePreview.jsx           # Live output preview & character counter
│   │   │   └── EmailSubjectBar.jsx          # Dedicated email subject display with copy
│   │   └── shared/
│   │       ├── Header.jsx                   # Brand header & auto-save indicator
│   │       ├── Footer.jsx                   # Privacy and attribution footer
│   │       └── Toast.jsx                    # Floating toast feedback notification
│   ├── data/
│   │   ├── categories.js                    # Category metadata definitions
│   │   ├── platforms.js                     # Platform definitions & theme colors
│   │   ├── sampleData.js                    # Quick test values
│   │   └── templates/                       # ⭐️ DEDICATED FILE PER TEMPLATE FOR EASY EDITING
│   │       ├── jobInquiryWhatsapp.js        # Your WhatsApp job inquiry template
│   │       ├── jobInquiryLinkedin.js        # Your LinkedIn job inquiry template
│   │       ├── jobInquiryEmail.js           # Matching cold email template
│   │       ├── referralWhatsapp.js          # Referral request WhatsApp
│   │       ├── referralLinkedin.js          # Referral request LinkedIn
│   │       ├── referralEmail.js             # Referral request Email
│   │       ├── followupWhatsapp.js          # Follow-up WhatsApp
│   │       ├── followupLinkedin.js          # Follow-up LinkedIn
│   │       ├── followupEmail.js             # Follow-up Email
│   │       ├── freelanceWhatsapp.js         # Freelance pitch WhatsApp
│   │       ├── freelanceLinkedin.js         # Freelance pitch LinkedIn
│   │       ├── freelanceEmail.js            # Freelance pitch Email
│   │       └── index.js                     # Central registry aggregating all templates
│   ├── pages/
│   │   └── GeneratorHome.jsx                # Main workspace linking state, form, & preview
│   ├── App.css                              # Component-specific styles
│   ├── index.css                            # Obsidian glassmorphism dark theme tokens
│   ├── App.jsx                              # Root layout & toast state
│   └── main.jsx                             # React 18 DOM mount point
├── index.html                               # HTML entry point with fonts & metadata
├── package.json                             # Dependencies & build scripts
├── vite.config.js                           # Vite build configuration
└── README.md                                # Project documentation
```

---

## ⭐️ How to Edit Any Template

Every message template is stored in its own isolated file inside [`src/data/templates/`](file:///c:/Users/shubhAM/Desktop/projects/Cold_E-mail_Template/src/data/templates/).

To customize or write your own template:
1. Open the specific file you want to edit (e.g. `src/data/templates/jobInquiryWhatsapp.js`).
2. Edit the text inside the `template: \`...\`` backticks.
3. Use `{{variableName}}` wherever you want a form field to be injected (e.g. `{{recruiterName}}`, `{{companyName}}`, `{{yourName}}`).
4. (Optional) If you add a new variable, just add an entry to the `fields: [...]` array in that file.

Example (`src/data/templates/jobInquiryWhatsapp.js`):
```javascript
export const jobInquiryWhatsapp = {
  id: 'job_inquiry:whatsapp',
  categoryId: 'job_inquiry',
  platformId: 'whatsapp',
  title: 'Recruiter WhatsApp Quick Ping',
  fields: [
    { key: 'recruiterName', label: "Recruiter's Name", placeholder: 'e.g. Sarah', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Acme Tech', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hey {{recruiterName}}! Know you're busy so keeping this quick 🙂

Saw you recruit for {{companyName}} — I'm a Python/Flutter dev, also leveling up in data science/ML right now. Curious what your team's hiring for at the moment.

Any chance you're free for a quick chat next week? Happy to send my resume over too.

Even a one-liner back would make my day 🙂

Thanks!
{{yourName}}`
};
```

---

## 🚀 Running the App Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Vite Dev Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.
