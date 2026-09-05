/**
 * Template: Application Follow-Up -> Email
 * You can easily edit the subject line, message text, or form fields below!
 */
export const followupEmail = {
  id: 'application_followup:email',
  categoryId: 'application_followup',
  platformId: 'email',
  title: 'Formal Application Follow-Up Email',
  hasSubject: true,
  subjectTemplate: `Following up: Application for {{roleTitle}} — {{yourName}}`,
  fields: [
    { key: 'recruiterName', label: "Recruiter's Name", placeholder: 'e.g. Sarah', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Acme Tech', required: true },
    { key: 'roleTitle', label: 'Applied Role', placeholder: 'e.g. Python Developer', required: true },
    { key: 'daysAgo', label: 'Days Ago Applied', placeholder: 'e.g. last Monday', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hi {{recruiterName}},

I hope you’re having a wonderful week.

I’m following up on my application for the {{roleTitle}} role at {{companyName}}, which I submitted {{daysAgo}}.

Given my experience in Python & Flutter development and my recent projects in Machine Learning and Data Science, I am confident that I can quickly deliver value to your engineering team.

I understand you likely have a high volume of applicants, but I would love to check if there are any updates regarding the next steps in the hiring process.

Please let me know if you need any additional materials, portfolio links, or references from my end.

Thank you very much for your time and guidance.

Best regards,
{{yourName}}`
};
