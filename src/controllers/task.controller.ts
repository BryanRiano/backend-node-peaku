import { Request, Response } from 'express';
import { Task } from '../models/task.model';
import { Delivery } from '../models/delivery.model';


export function getTasks(req: Request, res: Response) {
    if (req.params) {
        Task.findAll<Task>({
            include: [
                { model: Delivery, as: 'pedido' }
            ], where: { idconductor: req.params.idconductor, fecha: req.params.fecha }
        })
            .then((task) => res.status(200).json(
                {
                    "success": true,
                    "message": "Lista de tareas",
                    "data": task
                }))
            .catch((err: Error) => res.status(400).json({
                "success": false,
                "message": "Error al listar tareas",
                "data": err
            }));
    }else{
        res.status(400).json({
            "success": false,
            "message": "Error al listar tareas",
            "data": "No se enviaron datos"
        })
    }
}