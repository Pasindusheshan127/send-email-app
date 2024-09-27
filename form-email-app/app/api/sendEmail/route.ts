import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      res.status(400).json({ message: 'Missing fields' });
      return;
    }

    // Configure your SMTP transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,  
      },
    });

    // Email options
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,  
      subject: `Contact Form Submission from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
