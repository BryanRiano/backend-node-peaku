import express, { Application } from 'express';
import morgan from 'morgan';
import DeliveryRoutes from './routes/delivery.routes';
import TaskRoutes from './routes/task.routes';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from './swagger.json';

export class App {

    app : Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
        this.app.use('/delivery', DeliveryRoutes);
        this.app.use('/task', TaskRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('servidor iniciado en el puerto 3000');
    }
}