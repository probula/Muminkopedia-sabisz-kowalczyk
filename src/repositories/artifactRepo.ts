import ArtifactM, { Artifact } from "../models/Artifact";
import { Types } from "mongoose";

export async function getAllArtifacts(): Promise<Artifact[]> {
    return ArtifactM.find();
}

export async function createArtifact(
    name: string,
    description: string,
    owner: Types.ObjectId
): Promise<Artifact> {
    const newArtifact = new ArtifactM({ name, description, owner });
    return newArtifact.save();
}

export async function updateArtifactById(
    id: string,
    updatedArtifact: Partial<Artifact>
): Promise<Artifact | null> {
    return ArtifactM.findByIdAndUpdate(id, updatedArtifact, {
        returnDocument: "after"
    });
}

export async function deleteArtifactById(id: string): Promise<Artifact | null> {
    return ArtifactM.findByIdAndDelete(id);
}
