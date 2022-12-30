import { Router } from "express";
import {
  readAllcat,
  readCat,
  createCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

//* READ 고양이 데이터 전체 다 조회
//* READ 특정 고양이 데이터 조회
//* CREATE 새로운 고양이 추가 api
//* UPDATE 고양이 데이터 업데이트 => PUT
//* UPDATE 고양이 데이터 부분적으로 업데이트 => PATCH
//* DELETE 고양이 데이터 삭제 => DELETE
// 가독성이 좋아졌음
const router = Router();

router.get("/cats", readAllcat);
router.get("/cats/:id", readCat);
router.post("/cats", createCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", updatePartialCat);

export default router;
