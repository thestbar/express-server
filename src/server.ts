import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello there!');
});

app.listen(8080, () => console.log('Server is listening to port 8080.'));
