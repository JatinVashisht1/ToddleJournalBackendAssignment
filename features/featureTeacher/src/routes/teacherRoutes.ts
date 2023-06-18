import { Router } from "express";
import { CreateJournalController } from "../controllers/CreateJournalController";
import { container } from "tsyringe";
import "../../../../di/provideDependencies";
import { CreateTeacherController } from "../controllers/CreateTeacherController";
import { DeleteTeacherController } from "../controllers/DeleteTeacherController";
import { UpdateTeacherController } from "../controllers/UpdateTeacherController";
import { GetTeacherByUsername } from "../controllers/GetTeacherByUsername";
import { GetJournalController } from "../controllers/GetJournalController";
import { UpdateJournalController } from "../controllers/UpdateJournalController";
import { GetAllJournalsController } from "../controllers/GetAllJournalsController";

const router = Router();

router.get("/getJournals");

// container.registerSingleton(env.INJECT_ITEACHER_REPOSITORY, TeacherRepository);
const createJournal = container.resolve(CreateJournalController);

router.post("/createJournal", createJournal.createJournalHandler);

router.post(
  "/createTeacher",
  container.resolve(CreateTeacherController).createJournalHandler
);

router.post(
  "/deleteTeacher",
  container.resolve(DeleteTeacherController).deleteTeacherHandler
);

router.post(
  "/updateTeacher",
  container.resolve(UpdateTeacherController).updateTeacherHandler
);

router.get(
  "/getTeacher/:username",
  container.resolve(GetTeacherByUsername).getTeacherByUsername
);

router.get(
  "/getJournal",
  container.resolve(GetJournalController).getJournalsController
);

router.post(
  "/updateJournal",
  container.resolve(UpdateJournalController).updateJournalsController
);

router.get(
  "/getAllJournals",
  container.resolve(GetAllJournalsController).getAllJournalsHandler
);

export default router;
