/**
 * Template: Application Follow-Up -> LinkedIn
 * You can easily edit the message text or form fields below!
 */
export const followupLinkedin = {
  id: 'application_followup:linkedin',
  categoryId: 'application_followup',
  platformId: 'linkedin',
  title: 'Application Follow-Up on LinkedIn',
  fields: [
    { key: 'recruiterName', label: "Recruiter's Name", placeholder: 'e.g. Sarah', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Acme Tech', required: true },
    { key: 'roleTitle', label: 'Applied Role', placeholder: 'e.g. Python Developer', required: true },
    { key: 'daysAgo', label: 'Days Ago Applied', placeholder: 'e.g. last week', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hi {{recruiterName}},

Hope you're having a great week!

I know you review countless candidates, so keeping this super brief. I applied for the {{roleTitle}} position at {{companyName}} {{daysAgo}} and wanted to reiterate my strong interest.

My background spans Python & Flutter development alongside applied Data Science/ML, and I’m enthusiastic about the technical challenges {{companyName}} is tackling.

If there's any additional information or code samples I can provide to support my candidacy, please let me know.

Thank you again for your consideration,
{{yourName}}`
};
