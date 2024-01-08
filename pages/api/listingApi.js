import { MongoClient, ObjectId } from 'mongodb';


const handler = async (req, res) => {
  const client = await MongoClient.connect(process.env.MONGODB_KEY);

  try {
    const db = client.db("test");
    const listingsCollection = db.collection('listings');

    if (req.method === 'POST') {
      // Handle POST request
      const data = req.body;
      const result = await listingsCollection.insertOne(data);
      res.status(201).json({ message: 'Listing submitted successfully' });
    } else if (req.method === 'GET') {
      // Handle GET request
      
      if ('id' in req.query) {
        // Fetch a specific listing by ID
        const { id } = req.query;
        const _id = new ObjectId(id)
        const listing = await listingsCollection.findOne({ _id: new  ObjectId(_id) });


        if (listing) {
          res.status(200).json(listing);
        } else {
          res.status(404).json({ message: 'Listing not found' });
        }
      } else {
        // Fetch all listings
        const listings = await listingsCollection.find({}).toArray();
        res.status(200).json(listings);
      }
    } else {
      res.status(405).json({ message: 'We only support POST and GET' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  } finally {
    client.close();
  }
};

export default handler;
