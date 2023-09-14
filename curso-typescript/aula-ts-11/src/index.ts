import express, { Request, Response, json } from "express";
import { Game } from "./protocols/game-protocol";
import gamesService from "./service/games-service";
import httpStatus from "http-status";
import schemaValidation from "./middlewares/schemaValidation";
import createGameSchema from "./schemas/createGameSchema";

const app = express();
app.use(json());

app.post("/games", schemaValidation(createGameSchema), (req: Request, res: Response) => {
  const body = req.body as Game;
  try {
    gamesService.createGame(body);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.CONFLICT);
  }
});

app.get("/games", async (req: Request, res: Response) => {
  const games = await gamesService.getGames();
  console.log(games);
  res.send(games);
});

app.listen(5000, () => console.log(`Server is up and running or port 5000`));