import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export default async (req, res) => {
    const { email, name } = req.body; 
  const { data, error } = await resend.emails.send({
    from: 'Bizzlink <hello@bizzlink.co>',
    to: [email],
    subject: 'Welcome to Bizzlink',
    react: EmailTemplate({ firstName: name }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
