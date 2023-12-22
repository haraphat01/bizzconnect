import { NextResponse } from "next/server"
import { connectMongoDB } from "../../lib/mongodb"
import User from "../../models/user";


export default async function handler(req, res) {
    const { name, email } = req.body;
    await connectMongoDB()
    await User.create({name, email})
    return res.json({message: "user registered"})
  };