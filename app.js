import Server from "./server/Server.js";


import express from 'express';
import productosRouter from './routes/productos.routes.js';

const app = express();
app.use(express.json());

app.use('/api', productosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



app.use(express.static('public'));


Server.run(process.env.PORT || 8080)
