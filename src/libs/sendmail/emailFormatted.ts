interface EmailFormattedProps {
  fullName: string;
  email: string;
  contactType: string;
  subject: string;
  message: string;
}

export const emailFormatted = ({
  fullName,
  email,
  contactType,
  subject,
  message,
}: EmailFormattedProps) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en">
  <head>
    <meta charset="utf-8">
  
    <title>Felipe Ramos Site</title>
    <meta name="description" content="Felipe Ramos Site">
    <meta name="author" content="SitePoint">
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  
  </head>
  
  <body>
    <div class="container" style="margin-left: 20px;margin-right: 20px;">
      <h3>Your Email has sent succesful!</h3>
      <h4>Thank you ${fullName}, for contact me! I'll answer your soon!</h4>
      <div style="font-size: 16px;">
        <p>Your email:</p>
        <p>✉️${email}</p>
        <p>Message:</p>
        <p>${message}</p>
        <p>Subject:</p>
        <p>[${contactType.toLocaleUpperCase()}] - ${subject}</p>
        <br />
      </div>
        
      <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Felipe Ramos<br>FrontEnd Developer</p>
    </div>
  </body>
  </html>`;
};
