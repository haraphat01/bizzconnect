import { MongoClient } from 'mongodb';
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_KEY);
    const db = client.db();
    const listingsCollection = db.collection('listings');
    const result = await listingsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: 'Listing submitted successfully' });
  } else if (req.method === 'GET') {
    try {
      const client = await MongoClient.connect(process.env.MONGODB_KEY);
      const db = client.db("test");
      const listingsCollection = db.collection('listings');
      const listings = await listingsCollection.find({}).toArray();
      client.close();
      res.status(200).json(listings);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching listings', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'We only support POST and GET' });
  }
};

export default handler;
