import  express  from "express";
import multer from "multer";
import * as CustomersController from "../controllers/customers.js"
const router = express.Router();
const upload = multer();

/**
 * @api {get} /customer request customer information
 * @apiName getCustomers
 *
 * @apiSuccess {json} information of the customers.
 */
router.get("/", CustomersController.getCustomers);

/**
 * @api {get} /customer/:id request customer information
 * @apiName getCustomer
 *
 *  @apiParam {Number} id customer unique ID.
 * 
 * @apiSuccess {json} information of the customer.
 */
router.get("/:id", CustomersController.getCustomer);

/**
 * @api {post} /customer send customer information
 * @apiName postCustomers
 *
 * @apiSuccess {array} information of the customers.
 */
router.post("/", upload.array(), CustomersController.creatCustomers);

/**
 * @api {put} /customer/:id update customer information
 * @apiName updateCustomer
 *
 *  @apiParam {Number} id customer unique ID.
 * 
 * @apiSuccess {array} update information of the customer after modification.
 */
router.put("/:id", CustomersController.updateCustomer );

/**
 * @api {delete} /customer/:id delete customer information
 * @apiName destroyCustomer
 *
 *  @apiParam {Number} id customer unique ID.
 * 
 * @apiSuccess {void} update information of the customer after deletion.
 */
router.delete("/:id",CustomersController.destroyCustomer );
export default router;