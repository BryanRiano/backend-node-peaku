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
            .then((task) => res.status(200).json(task))
            .catch((err: Error) => res.status(500).json(err));
    }
}