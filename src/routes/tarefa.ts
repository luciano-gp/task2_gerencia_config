import { Router } from 'express';
import { Tarefa } from '../models/Tarefa';

const router = Router();

// Listar todas
router.get('/', async (_req, res) => {
  const tarefas = await Tarefa.find();
  res.json(tarefas);
});

export default router;
