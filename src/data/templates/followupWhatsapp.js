/**
 * Template: Application Follow-Up -> WhatsApp
 * You can easily edit the message text or form fields below!
 */
export const followupWhatsapp = {
  id: 'application_followup:whatsapp',
  categoryId: 'application_followup',
  platformId: 'whatsapp',
  title: 'Application Follow-Up via WhatsApp',
  fields: [
    { key: 'recruiterName', label: "Recruiter's Name", placeholder: 'e.g. Sarah', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Acme Tech', required: true },
    { key: 'roleTitle', label: 'Applied Role', placeholder: 'e.g. Python Developer', required: true },
    { key: 'daysAgo', label: 'Days Ago Applied', placeholder: 'e.g. 5 days', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hey {{recruiterName}}! Hope your week is going smoothly 🙂

Just wanted to follow up briefly — I submitted my application for the {{roleTitle}} role at {{companyName}} about {{daysAgo}} ago.

Still extremely excited about the chance to contribute with my Python/Flutter and ML skills! Happy to answer any questions or share work samples.

Thanks so much for keeping me in mind!
{{yourName}}`
};
