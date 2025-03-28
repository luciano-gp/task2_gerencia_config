import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import tarefaRoutes from './routes/tarefa';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', tarefaRoutes);

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro ao conectar no MongoDB:', err));

export default app;
