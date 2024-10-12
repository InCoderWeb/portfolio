import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV === 'production',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
} as SMTPTransport.Options)

type SendEmailDto = {
    sender: Mail.Address,
    receipients: Mail.Address[],
    subject: string,
    message: string,
}

// HTML template

export const sendEmail = async (dto: SendEmailDto, name: string, email: string) => {
    const { sender, receipients, subject, message } = dto;
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <title>
          New Contact Form Submission
        </title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #e9ecef; margin: 0; padding: 20px; color: #343a40; } .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); } h1 { color: #007bff; text-align: center; margin-bottom: 20px; } .field { margin-bottom: 20px; border-bottom: 1px solid #dee2e6; padding-bottom: 10px; } .field:last-child { border-bottom: none; } .field label { font-weight: bold; display: block; margin-bottom: 5px; font-size: 1.1em; } .field p { margin: 0; padding: 10px; background: #f8f9fa; border-left: 5px solid #007bff; border-radius: 4px; font-size: 1em; } .footer { text-align: center; margin-top: 30px; font-size: 0.9em; color: #6c757d; } .button { display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; transition: background-color 0.3s; } .button:hover { background-color: #0056b3; }
        </style>
      </head>
      <body>
        <div class="container esd-text">
          <h1>
            New Contact Form Submission
          </h1>
          <div class="field">
            <label for="name">
              Name:
            </label>
            <p id="name">
              ${name}     
            </p>
          </div>
          <div class="field">
            <label for="email">
              Email:
            </label>
            <p id="email">
              ${email}
            </p>
          </div>
          <div class="field">
            <label for="subject">
              Subject:
            </label>
            <p id="subject">
              ${subject}
            </p>
          </div>
          <div class="field">
            <label for="message">
              Message:
            </label>
            <p id="message">
              ${message}
            </p>
          </div>
          <div class="footer">
            <p>
              Thank you for your submission!
            </p>
            <p href="https://incoderweb.blogspot.com" class="button">
              Visit Our Website
            </p>
          </div>
        </div>
      </body>
    </html>
    `;

    return await transport.sendMail({
        from: sender,
        to: receipients.map(recipient => recipient.address).join(', '), // Join addresses into a string
        subject,
        html: htmlTemplate,
        text: message,
    });
};