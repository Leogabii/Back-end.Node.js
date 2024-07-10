import express from 'express'
import ProductsRoutes from '../routers/products.routers.js';
import cors from 'cors';

export default class Server {

    static app = express()


    static middlewares() {
        Server.app.use(cors());
        Server.app.use(express.json())
        Server.app.use(express.urlencoded({ extended: true }))
    }

    

    static routes() {
        const productsRoutes = new ProductsRoutes()
        //Server.app.use('/products', productsRoutes.router)
        Server.app.use('/api', productsRoutes.router)
    }


    static runServer(port) {
        Server.app.listen(port, () =>
            console.log(`listen at http://localhost:${port}`))
    }

    static publicServer(){
        Server.app.use(express.static('public'));
    }
    
    static run(port) {
        console.clear()
        Server.middlewares()
        Server.routes()
        Server.publicServer()
        Server.runServer(port)
    }
}