import express, { Request, Response } from 'express'
import {router as bookRouter} from "./Routes/book";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.send('LandingPage');
});

app.use('/api/v1/books', bookRouter)

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
