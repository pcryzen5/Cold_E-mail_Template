/**
 * Template: Employee Referral Request -> Email
 * You can easily edit the subject line, message text, or form fields below!
 */
export const referralEmail = {
  id: 'referral_request:email',
  categoryId: 'referral_request',
  platformId: 'email',
  title: 'Warm Employee Referral Email',
  hasSubject: true,
  subjectTemplate: `Quick inquiry re: {{roleTitle}} opening at {{companyName}}`,
  fields: [
    { key: 'contactName', label: "Contact's Name", placeholder: 'e.g. Alex', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Stripe', required: true },
    { key: 'roleTitle', label: 'Target Role', placeholder: 'e.g. Software Engineer', required: true },
    { key: 'jobId', label: 'Job ID / URL (optional)', placeholder: 'e.g. REQ-8921', required: false },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hi {{contactName}},

Hope you're doing well!

I noticed that {{companyName}} is currently hiring for a {{roleTitle}}{{#if jobId}} (Requisition ID: {{jobId}}){{/if}}. With my background in Python, Flutter app development, and machine learning, I feel my skillset matches the core requirements of this role closely.

Would you be open to providing an internal referral for this opening? To make the process as seamless as possible for you, I’ve attached my resume and prepared a quick summary blurb below.

If you have 5 minutes for a quick chat about your experience at {{companyName}}, I’d be grateful for the insight as well.

Thank you so much for your support!

Warm regards,
{{yourName}}`
};
