import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGO_URI; // MongoDB connection string
const client = new MongoClient(mongoUri);

export default defineEventHandler(async (event) => {
  try {
    await client.connect();
    const database = client.db("portfolio");
    const projectsCollection = database.collection("projects");

    const data = await projectsCollection.find({}).toArray();

    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: { message: "Error Connecting Database", error },
    };
  } finally {
    await client.close();
  }
});
// mongodb+srv://abhishek:AXHd25Msgdd3hwvS@projects.o3xyc.mongodb.net/
