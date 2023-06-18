import { Router } from "express";
import { container } from "tsyringe";
import "../../../../di/provideDependencies";
import { CreateStudentController } from "../controllers/CreateStudentController";
import { GetJournalsController } from "../controllers/GetJournalsController";
const router = Router();

router.post(
  "/createStudent",
  container.resolve(CreateStudentController).createStudentHandler
);

router.get(
  "/getJournal",
  container.resolve(GetJournalsController).getJournalsHandler
);

router.get(
  "/getJournalByTitle",
  container.resolve(GetJournalsController).getJournalsHandler
);
