import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

//* READ 고양이 데이터 전체 다 조회
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이 데이터 조회
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 추가 api
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* UPDATE 고양이 데이터 업데이트 => PUT
router.put("/cats/:id", (req, res) => {
  try {
    // params와 body는 수정된 데이터임..
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* UPDATE 고양이 데이터 부분적으로 업데이트 => PATCH
router.patch("/cats/:id", (req, res) => {
  try {
    // params와 body는 수정된 데이터임..
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        // 구조분해 할당??
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* DELETE 고양이 데이터 삭제 => DELETE

export default router;
