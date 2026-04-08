import { Character } from "../models/Character";
import {
    createCharacter,
    deleteCharacterById,
    getAllCharacters,
    updateCharacterById
} from "../repositories/characterRepo";
import { Types } from "mongoose";

export async function fetchCharacters(): Promise<Character[]> {
    return getAllCharacters();
}

export async function addCharacter(
    name: string,
    description: string,
    species: string,
    isHibernating: boolean,
    bestFriend: Types.ObjectId | null
): Promise<Character> {
    if (!name || !description || !species) {
        throw new Error("brakuje pola jakiegos  ():");
    }


return createCharacter(name, description, species, isHibernating, bestFriend);


}

export async function modifyCharacter(
    id: string,
    updatedData: Partial<Character>
): Promise<Character> {
    const character = await updateCharacterById(id, updatedData);


if (!character) {
    throw new Error(":( ");
}

return character;


}

export async function removeCharacter(id: string): Promise<Character> {
    const character = await deleteCharacterById(id);


if (!character) {
    throw new Error("Character nie znazlo :()");
}

return character;

}
