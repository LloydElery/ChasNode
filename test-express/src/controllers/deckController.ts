import Deck from "../models/deckModel";

const create = async (data: any) => {
  return await Deck.create(data);
};
const readAll = async () => {
  const Decks = await Deck.find({});
  return Decks;
};
const read = async (id: any) => {
  return await Deck.findById(id);
};
const update = async (id: any, data: any) => {
  return await Deck.findByIdAndUpdate(id, data, { new: true });
};
const deleteOne = async (id: any) => {
  return await Deck.findByIdAndDelete(id);
};
