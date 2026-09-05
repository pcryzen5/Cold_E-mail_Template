/**
 * Template: Job Inquiry -> WhatsApp
 * You can easily edit the message text or form fields below!
 */
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
