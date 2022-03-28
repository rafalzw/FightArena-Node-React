import * as express from "express";

import {addRouter} from "./routes/create-warrior";
import { fightRouter } from './routes/fight-arena';
import { hallOfFameRouter } from "./routes/hall-of-fame";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.use('/create-warrior', addRouter);
app.use('/fight-arena', fightRouter);
app.use('/hall-of-fame', hallOfFameRouter);
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
