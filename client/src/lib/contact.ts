// Contact form utilities without backend dependency
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Submit contact form via mailto (opens email client)
export function submitContactForm(data: ContactFormData): void {
  const { name, email, subject, message } = data;
  
  const mailtoBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );
  
  const mailtoUrl = `mailto:farhansadatx@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
  
  window.open(mailtoUrl, '_blank');
}

// Alternative: Submit via Netlify Forms (if deployed on Netlify)
export async function submitNetlifyForm(data: ContactFormData): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    return response.ok;
  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
}