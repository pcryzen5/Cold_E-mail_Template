/**
 * Template: Job Offer Acceptance Email
 * Category: offer_acceptance | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const offerAcceptanceEmail = {
  id: 'offer_acceptance:email',
  categoryId: 'offer_acceptance',
  platformId: 'email',
  title: "Job Offer Acceptance Email",
  hasSubject: true,
  subjectTemplate: "Excited to join {{companyName}}",
  fields: [
    {
        "key": "hiringManagerName",
        "label": "Hiring Manager's Name",
        "placeholder": "e.g. David",
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
        "key": "specificTeamOrProject",
        "label": "Specific Team / Project",
        "placeholder": "e.g. the mobile platform engineering team",
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

I'm thrilled to accept the offer for the {{jobTitle}} position at {{companyName}}! Thank you for this opportunity. I'm especially excited to contribute to {{specificTeamOrProject}} and grow with the company.

Let me know if there's any paperwork or next steps I should take care of before my start date, or anything else you need from me for onboarding.

A quick line confirming you've received this would make my day. Looking forward to getting started!

Thanks again,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
