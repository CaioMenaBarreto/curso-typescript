import gamesRepository from "../repository/games-repository";
import { Game, CreateGame } from "./../protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}

async function createGame(game: CreateGame) {
  try {
    if (gameAlreadyExists(game)) {
      throw { message: "Game already exists" }
    }

    await gamesRepository.createGame(game)

  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function gameAlreadyExists(game: CreateGame) {
  try {
    const result = await gamesRepository.getGameByTitleAndPlatform(game);
    console.log(result);
    return result.length > 0;
  } catch (err) {
    console.log(err)
    throw err;
  }

}


const gamesService = {
  getGames,
  createGame
}

export default gamesService;