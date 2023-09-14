import { Game, CreateGame } from "../protocols/game-protocol";
import { db } from "../database/database";


async function getGames() {
  const games = await db.query(`SELECT * FROM games;`)
  return games.rows;
}

async function createGame(game: CreateGame) {
  const create = await db.query(`INSERT INTO games (title, platform) VALUES ($1, $2);`, [game.title, game.platform]);
  return create;
}

async function getGameByTitleAndPlatform(game: CreateGame) {
  const getGame  = await db.query(`SELECT * FROM games WHERE title = $1 AND platform = $2;`, [game.title, game.platform]);
  return getGame.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;