import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const uri = await  MongoClient.connect(process.env.MONGODB_KEY);
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      const database = client.db();
      const collection = database.collection('listings');
      const listings = await collection.find({}).toArray();
      await client.close();
      res.status(200).json(listings);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}