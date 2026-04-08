import { Artifact } from "../models/Artifact";
import {
    createArtifact,
    deleteArtifactById,
    getAllArtifacts,
    updateArtifactById
} from "../repositories/artifactRepo";
import { Types } from "mongoose";

export async function fetchArtifacts(): Promise<Artifact[]> {
    return getAllArtifacts();
}

export async function addArtifact(
    name: string,
    description: string,
    owner: Types.ObjectId
): Promise<Artifact> {
    if (!name || !description || !owner) {
        throw new Error("brakuje pola  :(");
    }

return createArtifact(name, description, owner);


}

export async function modifyArtifact(
    id: string,
    updatedData: Partial<Artifact>
): Promise<Artifact> {
    const artifact = await updateArtifactById(id, updatedData);

if (!artifact) {
    throw new Error("brakuje czegos  :( ");
}

return artifact;

}

export async function removeArtifact(id: string): Promise<Artifact> {
    const artifact = await deleteArtifactById(id);


if (!artifact) {
    throw new Error("Artifact nie znalazlo :(");
}

return artifact;


}
