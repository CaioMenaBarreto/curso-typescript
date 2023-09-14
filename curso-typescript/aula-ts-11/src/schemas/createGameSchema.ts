import Joi from "joi";
import { CreateGame } from "../protocols/game-protocol";

const createGameSchema = Joi.object<CreateGame>({
    title: Joi.string().required(),
    platform: Joi.string().required()
})

export default createGameSchema;