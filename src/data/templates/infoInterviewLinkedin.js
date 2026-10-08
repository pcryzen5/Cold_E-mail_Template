/**
 * Template: Informational Interview Request LinkedIn
 * Category: informational_interview | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const infoInterviewLinkedin = {
  id: 'informational_interview:linkedin',
  categoryId: 'informational_interview',
  platformId: 'linkedin',
  title: "Informational Interview Request LinkedIn",
  hasSubject: false,
  
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
        "placeholder": "e.g. the AI developer tooling team",
        "required": true
    },
    {
        "key": "industryOrField",
        "label": "Industry / Field",
        "placeholder": "e.g. Mobile and Data Science",
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
        "key": "portfolio",
        "label": "Portfolio / GitHub",
        "placeholder": "e.g. pcryzen5.github.io",
        "required": false,
        "persistent": true
    }
],
  template: `Hi {{recruiterName}}, I'm {{yourName}}, a Python and Flutter developer moving into data science and ML. I've been following {{companyName}}'s work on {{specificTopicOrTeam}}, and I'm exploring opportunities in {{industryOrField}}.
Would you be open to a 15-minute chat about your journey and any advice you'd share? Even a one- or two-line reply would make my day.
Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
