/**
 * Template: Application with Referral Mention Email
 * Category: referral_mention | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const referralMentionEmail = {
  id: 'referral_mention:email',
  categoryId: 'referral_mention',
  platformId: 'email',
  title: "Application with Referral Mention Email",
  hasSubject: true,
  subjectTemplate: "Application for {{jobTitle}} - Referred by {{referralName}}",
  fields: [
    {
        "key": "hiringManagerName",
        "label": "Hiring Manager's Name",
        "placeholder": "e.g. David",
        "required": true
    },
    {
        "key": "referralName",
        "label": "Referral's Name",
        "placeholder": "e.g. Alex Rivera",
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
        "key": "specificProject",
        "label": "Specific Project / Result",
        "placeholder": "e.g. a Flutter student management app with attendance tracking and a MongoDB Atlas backend",
        "required": true
    },
    {
        "key": "firstStep",
        "label": "Concrete First Step (Week 1)",
        "placeholder": "e.g. learn your codebase and pick up a small starter task",
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
  template: `Hi {{hiringManagerName}},

{{referralName}} from your team suggested I apply for the {{jobTitle}} role at {{companyName}}, so I'm reaching out directly with my resume attached.

Here's something relevant to the role: {{specificProject}}. In my first week, I'd {{firstStep}}.

Does my background look like a fit for the next step? Even a one-line reply would mean a lot.

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
