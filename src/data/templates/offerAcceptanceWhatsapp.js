/**
 * Template: Job Offer Acceptance WhatsApp
 * Category: offer_acceptance | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const offerAcceptanceWhatsapp = {
  id: 'offer_acceptance:whatsapp',
  categoryId: 'offer_acceptance',
  platformId: 'whatsapp',
  title: "Job Offer Acceptance WhatsApp",
  hasSubject: false,
  
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
    }
],
  template: `Hi {{hiringManagerName}}! 👋 I'm thrilled to accept the {{jobTitle}} offer at {{companyName}}. Thank you so much for the opportunity! 🙌

Is there any paperwork or next steps I should take care of before my start date? Happy to share anything you need for onboarding too.

A quick reply to confirm you've seen this would make my day 😊 Can't wait to get started!`
};
