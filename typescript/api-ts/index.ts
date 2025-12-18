import express from 'express';
import router from './users';

const app = express();
app.use(express.json())



app.listen(3000, () => console.log('escuchando'))