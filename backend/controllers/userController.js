import User from '../models/User.js';

export const insertOne = async (req, res) => {
  try {
    const user = await User.create({ name: "Ahad", age: 30, email: "ahad@example.com", city: "Lahore", active: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const insertMany = async (req, res) => {
  try {
    const users = await User.insertMany([
      { name: "Fazeel", age: 22, email: "fazeel@example.com", city: "Karachi", active: true },
      { name: "Hassan", age: 35, email: "hassan@example.com", city: "Lahore", active: false }
    ]);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const find = async (req, res) => {
  try {
    const users = await User.find({ age: { $gte: 25 } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const user = await User.findOne({ name: "Ahad" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findLimit = async (req, res) => {
  try {
    const users = await User.find().limit(2);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findSkip = async (req, res) => {
  try {
    const users = await User.find().skip(1);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findSort = async (req, res) => {
  try {
    const users = await User.find().sort({ age: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const distinct = async (req, res) => {
  try {
    const cities = await User.distinct("city");
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const countDocs = async (req, res) => {
  try {
    const count = await User.countDocuments({ active: true });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOne = async (req, res) => {
  try {
    const updated = await User.updateOne({ name: "Fazeel" }, { $set: { age: 28 } });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateMany = async (req, res) => {
  try {
    const updated = await User.updateMany({ city: "Lahore" }, { $set: { active: false } });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const replaceOne = async (req, res) => {
  try {
    const replaced = await User.replaceOne(
      { name: "Hassan" },
      { name: "Hassan", age: 36, email: "hassan_updated@example.com", city: "Islamabad", active: true }
    );
    res.json(replaced);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteOne = async (req, res) => {
  try {
    const deleted = await User.deleteOne({ name: "Ahad" });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteMany = async (req, res) => {
  try {
    const deleted = await User.deleteMany({ active: false });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const aggregateData = async (req, res) => {
  try {
    const data = await User.aggregate([
      { $match: { age: { $gte: 20 } } },
      { $group: { _id: "$city", total: { $sum: 1 } } }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createIndex = async (req, res) => {
  try {
    const result = await User.collection.createIndex({ email: 1 }, { unique: true });
    res.json({ indexName: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const dropIndex = async (req, res) => {
  try {
    const result = await User.collection.dropIndex("email_1");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getIndexes = async (req, res) => {
  try {
    const indexes = await User.collection.indexes();
    res.json(indexes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findOneAndUpdate = async (req, res) => {
  try {
    const updated = await User.findOneAndUpdate(
      { name: "Hassan" },
      { $set: { city: "Multan" } },
      { returnDocument: "after", new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findOneAndDelete = async (req, res) => {
  try {
    const deleted = await User.findOneAndDelete({ name: "Fazeel" });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const bulkWrite = async (req, res) => {
  try {
    const result = await User.bulkWrite([
      { insertOne: { document: { name: "Uzair", age: 29, email: "uzair@example.com", city: "Rawalpindi", active: true } } },
      { updateOne: { filter: { name: "Hassan" }, update: { $set: { age: 31 } } } }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findOneAndReplace = async (req, res) => {
  try {
    const replaced = await User.findOneAndReplace(
      { name: "Uzair" },
      { name: "Uzair", age: 30, email: "Uzair_updated@example.com", city: "Peshawar", active: false },
      { returnDocument: "after", new: true }
    );
    res.json(replaced);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const renameCollection = async (req, res) => {
  try {
    await User.collection.rename("people");
    res.json({ message: "Collection renamed to 'people'" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const drop = async (req, res) => {
  try {
    await User.collection.drop();
    res.json({ message: "Collection dropped" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listCollections = async (req, res) => {
  try {
    const collections = await User.db.db.listCollections().toArray();
    res.json(collections.map(col => col.name));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
