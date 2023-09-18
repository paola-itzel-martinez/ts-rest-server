import cors from "cors";
import express, { Application } from "express";
import db from "../db/connection";
import { userRoutes } from "../routes";

class Server {
  private app: Application;
  private port: string;

  private apiRoutes = {
    users: {
      url: "/api/users",
      path: "../routes/users/users.routes",
    },
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.dbConnection();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiRoutes.users.url, userRoutes);
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.info("DB connected");
    } catch (error) {
      console.error(error);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.info(`Server listen on ${this.port}`);
    });
  }
}

export default Server;
