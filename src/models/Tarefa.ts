import { Document, Schema, model } from 'mongoose';

export interface ITarefa extends Document {
  descricao: string;
  data_criacao: Date;
  data_prevista: Date;
  data_encerramento?: Date;
  situacao: 'pendente' | 'em_andamento' | 'concluida' | 'cancelada';
}

const TarefaSchema = new Schema<ITarefa>({
  descricao: { type: String, required: true },
  data_criacao: { type: Date, default: Date.now },
  data_prevista: { type: Date, required: true },
  data_encerramento: { type: Date },
  situacao: {
    type: String,
    enum: ['pendente', 'em_andamento', 'concluida', 'cancelada'],
    default: 'pendente',
  },
});

export const Tarefa = model<ITarefa>('Tarefa', TarefaSchema);
