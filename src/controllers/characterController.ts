import { Request, Response } from "express";
import * as CharacterService from "../services/characterSer";

export async function getCharacters(req: Request, res: Response) {
    try {
        const characters = await CharacterService.fetchCharacters();
        res.json(characters);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}

export async function postCharacter(req: Request, res: Response) {
    try {
        const { name, description, species, isHibernating, bestFriend } = req.body;
        const newChar = await CharacterService.addCharacter(name, description, species, isHibernating, bestFriend);
        res.status(201).json(newChar);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
}

export async function putCharacter(req: Request, res: Response) {
    try {
        const updated = await CharacterService.modifyCharacter(req.params.id as string, req.body);
        res.json(updated);
    } catch (e: any) {
        res.status(404).json({ error: e.message });
    }
}

export async function deleteCharacter(req: Request, res: Response) {
    try {
        const deleted = await CharacterService.removeCharacter(req.params.id as string);
        res.json({ message: "Postać opuściła Dolinę", deleted });
    } catch (e: any) {
        res.status(404).json({ error: e.message });
    }
}