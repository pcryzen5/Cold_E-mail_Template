/**
 * Template: Freelance & Contract Pitch -> LinkedIn
 * You can easily edit the message text or form fields below!
 */
export const freelanceLinkedin = {
  id: 'freelance_pitch:linkedin',
  categoryId: 'freelance_pitch',
  platformId: 'linkedin',
  title: 'Founder / Client LinkedIn Pitch',
  fields: [
    { key: 'clientName', label: "Client / Founder's Name", placeholder: 'e.g. Dave', required: true },
    { key: 'companyOrProduct', label: 'Company / Product Name', placeholder: 'e.g. SwiftApp', required: true },
    { key: 'offering', label: 'What you can build/improve', placeholder: 'e.g. cross-platform Flutter app and backend', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hi {{clientName}},

Big fan of the milestones {{companyOrProduct}} has reached recently.

I'm reaching out because I help founders design and ship scalable software — specifically cross-platform apps with Flutter and robust backend & ML systems with Python.

If your team is looking to accelerate delivery for your {{offering}} without the overhead of full-time hiring, I can step in and start executing immediately.

Open to a brief 10-minute discovery call to see if there's an immediate fit?

Thanks,
{{yourName}}`
};
