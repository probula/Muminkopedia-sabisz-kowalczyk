import { Router } from "express";
import * as ArtifactCtrl from "../controllers/artifactController";

const router = Router();

router.get("/", ArtifactCtrl.getArtifact);
router.post("/", ArtifactCtrl.postArtifact);
router.put("/:id", ArtifactCtrl.putArtifact);
router.delete("/:id", ArtifactCtrl.deleteArtifact);

export default router;