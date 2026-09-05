/**
 * Template: Job Inquiry -> LinkedIn
 * You can easily edit the message text or form fields below!
 */
export const jobInquiryLinkedin = {
  id: 'job_inquiry:linkedin',
  categoryId: 'job_inquiry',
  platformId: 'linkedin',
  title: 'Recruiter LinkedIn InMail / Message',
  fields: [
    { key: 'recruiterName', label: "Recruiter's Name", placeholder: 'e.g. Sarah', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Acme Tech', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hi {{recruiterName}},

Hope you're doing well — know you're probably slammed, so I'll keep this short (30 sec, promise).

I came across your profile while looking into roles at {{companyName}}. I’m a Python & Flutter Developer building across web, mobile, and backend systems. Currently expanding my expertise in Data Science, Machine Learning, and Deep Learning, with a focus on building intelligent, data-driven applications. 

Would love to know what your team's hiring for right now, even if it's not an exact fit today.

Open to a quick chat sometime next week? Resume's on my profile if useful.

Even a one or two line reply would completely make my day.

Thanks,
{{yourName}}`
};
