/**
 * Template: Job Inquiry -> Email
 * You can easily edit the subject line, message text, or form fields below!
 */
export const jobInquiryEmail = {
  id: 'job_inquiry:email',
  categoryId: 'job_inquiry',
  platformId: 'email',
  title: 'Recruiter Cold Email',
  hasSubject: true,
  subjectTemplate: `Python & Flutter Developer — Quick Inqucdiry regarding {{companyName}} Roles`,
  fields: [
    { key: 'recruiterName', label: "Recruiter's Name", placeholder: 'e.g. Sarah', required: true },
    { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Acme Tech', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true },
    { key: 'yourcName', label: 'Your Name d d', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hi {{recruiterName}},

Hope this note finds you well!

I’ve been following {{companyName}}'s impressive work and wanted to reach out directly. I’m a {{yourcName}} Python & Flutter Developer experienced in building robust mobile, web, and backend applications. Currently, I am also deepening my expertise in Data Science, Machine Learning, and Deep Learning to build intelligent, data-driven software.

I noticed {{companyName}}'s focus on engineering excellence and would love to know if your team is currently exploring new talent or opening up upcoming roles. Even if there isn't an exact match today, I’d be thrilled to connect for future opportunities.

Are you open to a brief 10-minute chat sometime next week? I have attached my resume for your reference, and you can also check out my work on my portfolio/GitHub.

Thank you very much for your time and consideration!

Best regards,
{{yourName}}`
};
