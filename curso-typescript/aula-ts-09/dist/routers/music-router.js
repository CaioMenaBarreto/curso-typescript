"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var music_controller_1 = __importDefault(require("../controllers/music-controller"));
var schemaValidation_1 = __importDefault(require("../middlewares/schemaValidation"));
var musicSchema_1 = __importDefault(require("../schemas/musicSchema"));
var musicRouter = (0, express_1.Router)();
musicRouter.get("/musics", music_controller_1.default.getMusics);
musicRouter.post("/musics", (0, schemaValidation_1.default)(musicSchema_1.default), music_controller_1.default.createMusic); // TODO: validação via Joi
exports.default = musicRouter;
