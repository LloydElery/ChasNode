import Card from "../models/cardModel";

const create = async (data: any) => {
  return await Card.create(data);
};

const readAll = async () => {
  const Cards = await Card.find({}).limit(5);
  return Cards;
};

const read = async (id: any) => {
  return await Card.findById(id);
};

const update = async (id: any, data: any) => {
  return await Card.findByIdAndUpdate(id, data, { new: true });
};

const deleteOne = async (id: any) => {
  return await Card.findByIdAndDelete(id);
};

export const getAllCards = async (req: any, res: any) => {
  const card = await readAll();
  res.status(200).json(card);
};

export const addCard = async (req: any, res: any) => {
  const { name } = req.body;

  const result = await create({ name });

  res.status(201).json({ message: "Card created successfully", card: result });
};

export const getCard = async (req: any, res: any) => {
  const id = req.params.id;
  const card = await read(id);

  res.status(200).json(card);
};

export const updateCard = async (req: any, res: any) => {
  const { title, author, publisher, read } = req.body;
  const id = req.params.id;

  const updatedcard = await update(id, { title, author, publisher, read });

  res
    .status(200)
    .json({ message: "Update succeeded", updatedcard: updatedcard });
};

export const deleteCard = async (req: any, res: any) => {
  const id = req.params.id;

  const deletedcard = await deleteOne(id);

  res.status(200).json({ message: "card deleted", deletedcard: deletedcard });
};
