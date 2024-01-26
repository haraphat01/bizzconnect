import { NextResponse } from "next/server"
import { connectMongoDB } from "../../lib/mongodb"
import User from "../../models/user";
import { EmailTemplate } from '../../components/email-template'
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);


const emailApi = "https://bizzlink.co/api/send"
export default async function handler(req, res) {
  await connectMongoDB()
  const { email, name } = req.body;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // If the email doesn't exist, create a new user
  const newUser = new User({ email, name });
  await newUser.save();

  try {
    const emailResponse = await fetch("https://bizzlink.co/api/send", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });

    // Handle the response from the send.ts API
    console.log(emailResponse);

    res.status(201).json({ message: 'User data saved successfully' });
  } catch (error) {
    // Handle any errors
    console.log(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
