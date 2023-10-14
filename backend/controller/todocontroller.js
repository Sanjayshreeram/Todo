const { Router } = require('express');
const TODOMODEL = require('../schema/Todoschema');

const route = Router();

const getnotes = async (req, res) => {
  const Todo = await TODOMODEL.find();
  res.json(Todo);
};

const createnotes = async (req, res) => {
  const text = req.body;
  if (text) {
    TODOMODEL.create(text);
    res.send({ text });
  }
};

const updatenotes = async (req, res) => {
  const { _id, text } = req.body; // Assuming _id is the unique identifier for your notes

  try {
    const update = await TODOMODEL.findByIdAndUpdate(_id, { text });

    if (update) {
      res.status(200).send(update);
    } else {
      res.status(404).send("Document not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const Deletenotes = async (req, res) => {
  const { _id } = req.body;

  if (_id) {
    try {
      const deleted = await TODOMODEL.findByIdAndDelete(_id);
      if (deleted) {
        console.log('Successfully deleted');
        return res.status(200).json({ message: 'Successfully deleted' });
      }
    } catch (error) {
      console.error('Error occurred:', error);
      return res.status(500).json({ error: 'Error occurred' });
    }
  }

  return res.status(400).json({ error: 'Invalid request' });
};


module.exports = { getnotes, createnotes, updatenotes, Deletenotes };
