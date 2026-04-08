import { Request, Response } from "express";
import * as ArtifactService from "../services/artifactSer";

export async function getArtifact(req: Request, res: Response) {
    try {
        const artifacts = await ArtifactService.fetchArtifacts();
        res.json(artifacts);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}

export async function postArtifact(req: Request, res: Response) {
    try {
        const { name, description, owner } = req.body;
        const newArtifact = await ArtifactService.addArtifact(name, description, owner);
        res.status(201).json(newArtifact);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
}

export async function putArtifact(req: Request, res: Response) {
    try {
        const updated = await ArtifactService.modifyArtifact(req.params.id as string, req.body);
        res.json(updated);
    } catch (e: any) {
        res.status(404).json({ error: e.message });
    }
}

export async function deleteArtifact(req: Request, res: Response) {
    try {
        const deleted = await ArtifactService.removeArtifact(req.params.id as string);
        res.json({ message: "Usunięto artefakt", deleted });
    } catch (e: any) {
        res.status(404).json({ error: e.message });
    }
}