import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message, name } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input!" });
      return;
    }

    // Store it in a dataBase
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${mongodb_clustername}.hqb6r74.mongodb.net/?retryWrites=true&w=majority`;

    try {
      // client = await MongoClient.connect(
      //   "mongodb+srv://matinVilan:WXLluxN49PDh8mtw@cluster0.hqb6r74.mongodb.net/?retryWrites=true&w=majority"
      // );
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "could not connect to database" });
      return;
    }

    const db = client.db(process.env.mogodb_database);

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored!", message: newMessage });
  }
}

export default handler;
