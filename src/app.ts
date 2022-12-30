import * as express from "express";
import catsRouter from "./cats/cats.route";
const app: express.Express = express();
const port: number = 8000;

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("This is logging middleware!");
  next();
});

//* json middleware  => express에서는  json형식을 바꿔주는 것이 없어서
// json 미들웨어를 따로 만들어 줘야함
app.use(express.json());

// 미들웨어 라우트를 등록해준다.
app.use(catsRouter);

//* 404 middleware
app.use((req, res, next) => {
  console.log("This is error middleware!");
  res.send({ error: "404 not found error!" });
});

// 8080 서버를 연다
app.listen(port, () => {
  console.log(`server is on... http://localhost:${port}`);
});
