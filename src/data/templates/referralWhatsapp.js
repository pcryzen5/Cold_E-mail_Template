/**
 * Template: Employee Referral Request -> WhatsApp
 * You can easily edit the message text or form fields below!
 */
export const referralWhatsapp = {
  id: 'referral_request:whatsapp',
  categoryId: 'referral_request',
  platformId: 'whatsapp',
  title: 'Peer / Alumni Quick Referral Ask',
  fields: [
    { key: 'contactName', label: "Contact's Name", placeholder: 'e.g. Alex', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Google', required: true },
    { key: 'roleTitle', label: 'Target Role', placeholder: 'e.g. Software Engineer', required: true },
    { key: 'jobId', label: 'Job ID / Link (optional)', placeholder: 'e.g. REQ-8921', required: false },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hey {{contactName}}! Know you're busy so keeping this quick 🙂


Saw you're working at {{companyName}} — truly love what you guys are building!

I noticed an open {{roleTitle}} position{{#if jobId}} (Ref: {{jobId}}){{/if}} that closely aligns with my background in Python, Flutter, and ML. Would you be comfortable submitting an internal referral for me, or sharing quick advice on the team?

Happy to send over my resume and a short blurb to make it effortless for you.

Appreciate your time either way!

Best,
{{yourName}}`
};
