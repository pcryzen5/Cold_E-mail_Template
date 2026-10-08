/**
 * Template: Informational Interview Request Email
 * Category: informational_interview | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const infoInterviewEmail = {
  id: 'informational_interview:email',
  categoryId: 'informational_interview',
  platformId: 'email',
  title: "Informational Interview Request Email",
  hasSubject: true,
  subjectTemplate: "Quick Chat ? Interested in Learning More About Your Work",
  fields: [
    {
        "key": "recruiterName",
        "label": "Recipient's Name",
        "placeholder": "e.g. Sarah",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "specificTopicOrTeam",
        "label": "Specific Project / Post / Team",
        "placeholder": "e.g. your recent mobile architecture talk",
        "required": true
    },
    {
        "key": "industryOrField",
        "label": "Industry / Field",
        "placeholder": "e.g. Mobile Engineering & AI",
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
  template: `Hi {{recruiterName}},
I know you're probably slammed, so I'll keep this short. I'm {{yourName}}, a Python and Flutter developer who built a student management app with Flutter and MongoDB, and I'm now moving into data science and ML.
I've been following {{companyName}}'s work on {{specificTopicOrTeam}}, and I'm exploring opportunities in {{industryOrField}}. I'd love to hear about your journey and any advice you'd share. Would you be open to a 15-minute chat whenever works for you? If a call is a stretch, I'm happy to send two or three questions over email instead.
Even a one- or two-line reply would make my day. Thanks!

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
