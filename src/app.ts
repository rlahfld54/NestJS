import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Express = express();
    this.app = app;
  }

  private setRoute() {
    // 미들웨어 라우트를 등록해준다.
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("This is logging middleware!");
      next();
    });

    //* json middleware  => express에서는  json형식을 바꿔주는 것이 없어서
    // json 미들웨어를 따로 만들어 줘야함
    this.app.use(express.json());

    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log("This is error middleware!");
      res.send({ error: "404 not found error!" });
    });
  }

  /**
   * listen
   */
  public listen() {
    this.setMiddleware();
    // 8080 서버를 연다
    this.app.listen(8000, () => {
      console.log(`server is on... http://localhost:8000`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
