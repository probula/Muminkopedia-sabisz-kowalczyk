import mongoose, { Document, Types } from "mongoose";

export interface Character extends Document {
    _id: Types.ObjectId;
    name: string;
    description: string;
    species: string;
    isHibernating: boolean;
    bestFriend?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const CharacterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        species: { type: String, required: true },
        isHibernating: { type: Boolean, required: true },
        bestFriend: { type: Types.ObjectId, ref: "Character", required: false },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<Character>("Character", CharacterSchema);

