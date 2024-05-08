import { Schema, model } from "mongoose";

const deckSchema = new Schema<any>({});

const Deck = model<any>("Deck", deckSchema);

export default Deck;
