import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import registration from "./registration.js";
import createTravel from "./createTravel.js";
import getUserData from "./getUserData.js";
import login from "./login.js";
import updateUserData from "./updateUserData.js";
import getFavoritesTravels from "./getFavoritesTravels.js";
import search from "./search.js";
import setFavorite from "./setFavorite.js";
import getTravel from "./getTravel.js";
import joinTravel from "./joinTravel.js";

const port = 8080;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

app.post("/signIn/", (req, res) => {
  //+
  const user = login(req, res);
});

app.get("/profile/:id", (req, res) => {
  //+
  getUserData(req, res);
});

app.post("/profile/:id", (req, res) => {
  //++
  updateUserData(req, res);
  res.send(JSON.stringify("Post profile по id юзера"));
});

app.get("/travel/:id", (req, res) => {
  //+
  console.log(req.query.login);
  getTravel(req, res);
});

app.post("/travel", (req, res) => {
  //+
  createTravel(req, res);
});

app.get("/future/:id", (req, res) => {
  res.send(JSON.stringify(["Получение", "future"]));
});

app.get("/history/:id", (req, res) => {
  res.send(JSON.stringify(["Получение", "history"]));
});

app.get("/favorites/:login", (req, res) => {
  getFavoritesTravels(req, res);
});

app.post("/search", (req, res) => {
  //+
  const result = search(req, res);
});

app.post("/signUp/", (req, res) => {
  //+
  registration(req);
});

app.post("/setFavorite/", (req, res) => {
  setFavorite(req, res);
});

app.post("/joinTravel/", (req, res) => {
  joinTravel(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
