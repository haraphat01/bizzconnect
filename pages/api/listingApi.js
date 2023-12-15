import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_KEY);;
    const db = client.db();
    const listingsCollection = db.collection('listings');
    const result = await listingsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: 'Listing inserted!' });
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
};
export default handler;
