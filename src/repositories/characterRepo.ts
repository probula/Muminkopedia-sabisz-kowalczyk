import CharacterM, { Character } from "../models/Character";
import { Types } from "mongoose";

export async function getAllCharacters(): Promise<Character[]> {
    return CharacterM.find();
}

export async function createCharacter(
    name: string,
    description: string,
    species: string,
    isHibernating: boolean,
    bestFriend: Types.ObjectId | null
): Promise<Character> {
    const newCharacter = new CharacterM({
        name,
        description,
        species,
        isHibernating,
        bestFriend
    });


return newCharacter.save();
}

export async function updateCharacterById(
    id: string,
    updatedCharacter: Partial<Character>
): Promise<Character | null> {
    return CharacterM.findByIdAndUpdate(id, updatedCharacter, {
        returnDocument: "after"
    });
}

export async function deleteCharacterById(id: string): Promise<Character | null> {
    return CharacterM.findByIdAndDelete(id);
}
