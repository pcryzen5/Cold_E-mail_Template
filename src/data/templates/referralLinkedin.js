/**
 * Template: Employee Referral Request -> LinkedIn
 * You can easily edit the message text or form fields below!
 */
export const referralLinkedin = {
  id: 'referral_request:linkedin',
  categoryId: 'referral_request',
  platformId: 'linkedin',
  title: 'Engineer / Employee LinkedIn Referral Request',
  fields: [
    { key: 'contactName', label: "Contact's Name", placeholder: 'e.g. Alex', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Google', required: true },
    { key: 'roleTitle', label: 'Target Role', placeholder: 'e.g. Software Engineer', required: true },
    { key: 'jobId', label: 'Job ID / URL (optional)', placeholder: 'e.g. REQ-8921', required: false },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hi {{contactName}},

Hope you're having a productive week!

I came across your profile while exploring the engineering culture at {{companyName}}. I’m a Python and Flutter Developer with a growing focus in Data Science/ML, and I recently spotted the {{roleTitle}} role{{#if jobId}} (Job ID: {{jobId}}){{/if}}.

Given your experience at {{companyName}}, I’d love to ask: would you be open to passing along my resume for a referral? I have a tailored 2-sentence blurb ready so it takes less than 60 seconds of your time.

No worries at all if company policy or workload prevents this — appreciate your time either way!

Thanks,
{{yourName}}`
};
