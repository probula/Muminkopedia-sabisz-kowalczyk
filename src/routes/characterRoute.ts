import { Router } from "express";
import * as CharacterCtrl from "../controllers/characterController";

const router = Router();

router.get("/", CharacterCtrl.getCharacters);
router.post("/", CharacterCtrl.postCharacter);
router.put("/:id", CharacterCtrl.putCharacter);
router.delete("/:id", CharacterCtrl.deleteCharacter);

export default router;
