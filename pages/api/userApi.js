import { NextResponse } from "next/server"
import { connectMongoDB } from "../../lib/mongodb"
import User from "../../models/user";


export default async function handler(req, res) {
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
  }