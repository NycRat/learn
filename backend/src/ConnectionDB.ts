import { MongoClient } from "mongodb";

const uri = process.env.ATLAS_URI || "";

const client = new MongoClient(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
});

let _collection: MongoClient;

client.connect((err, collection) => {
  if (err) {
    console.log(err);
    return;
  }

  if (collection) {
    _collection = collection;
    console.log("Connected to MongoDB");
  }
});

export const getDB = (dbName: string) => {
  return _collection.db(dbName);
};
