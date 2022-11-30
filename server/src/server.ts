import express from 'express';
import cors from 'cors'

const port = 9000;

const app = express();

// const cors = require("cors");
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});





app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});