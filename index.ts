import express, {Express,Request,Response} from 'express'
import dotenv from 'dotenv'
const app: Express = express();

dotenv.config();
const port: number|string = process.env.PORT || 5000;

app.get('/',(req:Request,res:Response)=>{
    res.send("Hola mundo")
})

app.listen(port,()=>{
    console.log("El servidor esta corriendo en el puerto",port);
})

app.get('/goodbye', (req, res) => {
    const data = {
      message: "Goodbye, world"
    };
    res.status(200).json({ data });
  });
  

app.get('/hello', (req, res) => {
    const name = req.query.name || 'anónimo';
    const data = {
      message: `Hola, ${name}`
    };
    res.status(200).json({ data });
  });
  