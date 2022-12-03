import express from "express";
import cors from "cors";
import { productsRouter } from "./routes/productsRoutes";
import { authRouter } from "./routes/authRouts";

const port = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/", productsRouter);
app.use("/api/v1/", authRouter);

// app.get('/', (req, res) => {
//     res.send('Express + TypeScript Server');
// });

app.get("*", (req, res) => {
  res.send(`<div>
    <h1>404</h1>
    <a href="/api/v1/">Вернуться на главную</a>
    </div>`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
