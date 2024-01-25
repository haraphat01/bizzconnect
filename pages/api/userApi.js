import { NextResponse } from "next/server"
import { connectMongoDB } from "../../lib/mongodb"
import User from "../../models/user";


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
  res.status(201).json({ message: 'User data saved successfully' });
  fetch('/api/send.ts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name }),
  })
    .then(response => {
      // Handle the response from the send.ts API
      console.log(response)
    })
    .catch(error => {
      // Handle any errors
      console.log(error)
    });

  res.status(201).json({ message: 'User data saved successfully' });
}