/**
 * Template: Post-Interview Thank-You Email
 * Category: interview_thank_you | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const interviewThankYouEmail = {
  id: 'interview_thank_you:email',
  categoryId: 'interview_thank_you',
  platformId: 'email',
  title: "Post-Interview Thank-You Email",
  hasSubject: true,
  subjectTemplate: "Thank you for the opportunity - {{jobTitle}} Interview",
  fields: [
    {
        "key": "recruiterName",
        "label": "Interviewer's Name",
        "placeholder": "e.g. Sarah",
        "required": true
    },
    {
        "key": "jobTitle",
        "label": "Job Title",
        "placeholder": "e.g. Python & Flutter Developer",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "specificDetail",
        "label": "Specific Detail from Interview",
        "placeholder": "e.g. our discussion on scalable microservices in Python",
        "required": true
    },
    {
        "key": "yourName",
        "label": "Your Name",
        "placeholder": "e.g. Shubham",
        "required": true,
        "persistent": true
    },
    {
        "key": "phone",
        "label": "Phone Number",
        "placeholder": "e.g. +91 98765 43210",
        "required": false,
        "persistent": true
    },
    {
        "key": "linkedIn",
        "label": "LinkedIn Profile",
        "placeholder": "e.g. linkedin.com/in/shubham",
        "required": false,
        "persistent": true
    },
    {
        "key": "portfolio",
        "label": "Portfolio / GitHub",
        "placeholder": "e.g. pcryzen5.github.io",
        "required": false,
        "persistent": true
    }
],
  template: `Hi {{recruiterName}}, Thank you for taking the time to talk with me about the {{jobTitle}} role at {{companyName}}. I really enjoyed learning more about your team and the work you're doing.

Our conversation made me even more excited about the role, especially {{specificDetail}}.

If there's anything else I can send over, just let me know. Looking forward to next steps, and I'd love the chance to join the team! 

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
