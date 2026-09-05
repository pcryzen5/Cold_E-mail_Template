/**
 * Template: Freelance & Contract Pitch -> Email
 * You can easily edit the subject line, message text, or form fields below!
 */
export const freelanceEmail = {
  id: 'freelance_pitch:email',
  categoryId: 'freelance_pitch',
  platformId: 'email',
  title: 'Client Pitch Cold Email',
  hasSubject: true,
  subjectTemplate: `Quick idea for {{companyOrProduct}} — {{offering}}`,
  fields: [
    { key: 'clientName', label: "Client / Founder's Name", placeholder: 'e.g. Dave', required: true },
    { key: 'companyOrProduct', label: 'Company / Product Name', placeholder: 'e.g. SwiftApp', required: true },
    { key: 'offering', label: 'What you can build/improve', placeholder: 'e.g. cross-platform mobile app and backend services', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hi {{clientName}},

Hope this email finds you well!

I've been tracking {{companyOrProduct}}'s journey and admire your trajectory in the market.

I am an independent software engineer specializing in Python, Flutter, and practical Data Science/ML solutions. I partner with fast-moving teams to design and build {{offering}} with clean architecture and quick turnaround times.

Would you be open to a quick 10-minute introductory call next Tuesday or Wednesday to discuss your product roadmap and explore how I could assist?

Looking forward to connecting!

Best regards,
{{yourName}}`
};
