import express from "express";
import { repoRoute } from "./repo.route";
const app = express();

app.use("/repo", repoRoute);

export { app as routes };
