import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app : Express = express();
const port = 8080;

// define a route handler for the default home page
app.get( "/", (req: Request, res: Response) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

