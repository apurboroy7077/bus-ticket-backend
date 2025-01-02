import express from "express";
import { authenticationRouter } from "./routes/authentication/authenticationRoutes.route.js";
import { connectDB } from "./custom-functions/database/connectDB.js";
import { testingRouter } from "./routes/test/testingRouter.route.js";
import cors from "cors";
import morgan from "morgan";
import { productsRouter } from "./routes/products/products.route.js";
import { userActivityRouter } from "./routes/user-activity/userActivity.route.js";

import gameRouter from "./routes/game/game.route.js";
import { connectToMySqlDatabase } from "./custom-functions/database/mysql/connectMySql.js";
import { mySqlRouter } from "./routes/mysql/mysql.route.js";
import { adminRouter } from "./routes/admin/admin.route.js";
import { userRouter } from "./routes/user/user.route.js";

const app = express(); // Create an Express app

// USING SOME BASIC PACKAGES STARTS-----------------------------------------------------------------------------------------------------------------------------

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(morgan("dev"));

// USING SOME BASIC PACKAGES ENDS-----------------------------------------------------------------------------------------------------------------------------
// USING SOME CUSTOM MIDDLEWARE STARTS------------------------------------------------------------------------------------------------------------------
app.use((req, res, next) => {
  setTimeout(next, 0); // Introduce a delay (adjust time if needed) before passing control to the next middleware
});
// USING SOME CUSTOM MIDDLEWARE ENDS------------------------------------------------------------------------------------------------------------------

// USING ROUTES STARTS------------------------------------------------------------------------------------------------------------------------
app.use(authenticationRouter);
app.use(adminRouter);
app.use(userRouter);
app.use(testingRouter);
app.use(productsRouter);
app.use(userActivityRouter);

app.use(gameRouter);
app.use(mySqlRouter);
// USING ROUTES ENDS------------------------------------------------------------------------------------------------------------------------

connectDB();
// connectToMySqlDatabase();
app.get("/", (request, response) => {
  response.send("Server Started");
});

export default app;
