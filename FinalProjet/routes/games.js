import  express  from "express";
import multer from "multer";
import * as gamesController from "../controllers/games.js"
const router = express.Router();
const upload = multer();

/**
 * @api {get} /game request game information
 * @apiName getGames
 *
 * @apiSuccess {json} information of the games.
 */
router.get("/", gamesController.getGames);

/**
 * @api {get} /game/:id request game information
 * @apiName getgame
 *
 *  @apiParam {Number} id game unique ID.
 * 
 * @apiSuccess {json} information of the game.
 */
router.get("/:id", gamesController.getGame);

/**
 * @api {post} /game send customer information
 * @apiName postGames
 *
 * @apiSuccess {array} information of the games.
 */
router.post("/", upload.array(), gamesController.creatGames);

/**
 * @api {put} /game/:id update games information
 * @apiName updateGame
 *
 *  @apiParam {Number} id game unique ID.
 * 
 * @apiSuccess {array} update information of the game after modification.
 */
router.put("/:id", gamesController.updateGame );

/**
 * @api {delete} /customer/:id delete game information
 * @apiName destroyGame
 *
 *  @apiParam {Number} id game unique ID.
 * 
 * @apiSuccess {void} update information of the game after deletion.
 */
router.delete("/:id",gamesController.destroyGame );
export default router;