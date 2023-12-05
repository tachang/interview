import express, { Request, Response } from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/health', (req: Request, res: Response) => {
    res.send('Ok');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
