import { Request, Response } from 'express';
import { Delivery } from '../models/delivery.model';
import { DeliveryInterface } from '../interface/delivery.interface';
import { Driver } from '../models/driver.model';
import { Task } from '../models/task.model';
import { Sequelize } from 'sequelize';


export function createDelivery(req: Request, res: Response) {
    if (req.body) {
        const data: DeliveryInterface = req.body;
        Delivery.create<Delivery>(data)
            .then((delivery: Delivery) => getRandomDriver(res, delivery))
            .catch((err: Error) => res.status(400).json({
                "success": false,
                "message": "Error al crear pedido",
                "data": err
            }));
    }else{
        res.status(400).json({
            "success": false,
            "message": "Error al crear pedido",
            "data": "No se enviaron datos"
        })
    }
}

function getRandomDriver(res: Response, delivery: Delivery) {
    Driver.findOne({ order: Sequelize.literal('rand()') })
        .then((driver) => createTask(res, driver?.id, delivery.id, delivery.fechaEntrega))
        .catch((err: Error) => res.status(400).json({
            "success": false,
            "message": "Error al obtener conductor",
            "data": err
        }))
}

function createTask(res: Response, idconductor: number | undefined, idpedido: number, fecha: Date) {
    const data = {
        idconductor: idconductor,
        idpedido: idpedido,
        fecha: fecha
    }
    Task.create<Task>(data)
        .then((task: Task) => res.status(201).json({
            "success": true,
            "message": "Pedido creado",
            "data": task
        }))
        .catch((err: Error) => res.status(400).json({
            "success": false,
            "message": "Error al crear tarea",
            "data": err
        }));
}