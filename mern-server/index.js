const express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const { ServerApiVersion, MongoClient } = require("mongodb");

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//mongodb connection
const uri =
  "mongodb+srv://bookly-store:user123@cluster0.raomzor.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    //create a collection of documents
    const booksCollections = client.db("bookInventory").collection("books");

    //insert a book
    app.post("/upload-book", async (req, res) => {
      const newBook = req.body;
      const result = await booksCollections.insertOne(newBook);
      res.send(result);
    });

    //get all books
    // app.get("/all-books", async (req, res) => {
    //   const books = await booksCollections.find().toArray();
    //   res.send(books);
    // });

    //update book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const result = await booksCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //delete a book
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksCollections.deleteOne(filter);
      res.send(result);
    });

    //find book by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const books = await booksCollections.find(query).toArray();
      res.send(books);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
