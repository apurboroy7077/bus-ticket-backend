import express from "express";
import { createBusController } from "../../controllers/admin/create-bus/createBus.controller.js";
const adminRouter = express.Router();
adminRouter.post("/admin/bus", createBusController);
export { adminRouter };
//# sourceMappingURL=admin.route.js.map