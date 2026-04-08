import mongoose, { Document, Types } from "mongoose";

export interface Artifact extends Document {
    _id: Types.ObjectId;
    name: string;
    description: string;
    owner: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const ArtifactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        owner: { type: Types.ObjectId, ref: "Character", required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<Artifact>("Artifact", ArtifactSchema);