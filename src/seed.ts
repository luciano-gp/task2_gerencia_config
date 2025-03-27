import dotenv from "dotenv";
import mongoose from "mongoose";
import { Tarefa } from "./models/Tarefa";

dotenv.config();

const seedTarefas = async () => {
  await mongoose.connect(process.env.MONGODB_URI!);

  const count = await Tarefa.countDocuments();
  if (count > 0) {
    console.log("Tarefas já existentes. Seed ignorado.");
    return mongoose.disconnect();
  }

  const agora = Date.now();

  const tarefas = [
    {
      descricao: "Estudar TypeScript",
      data_criacao: new Date(agora - 10 * 86400000),
      data_prevista: new Date(agora - 7 * 86400000),
      situacao: "concluida",
      data_encerramento: new Date(agora - 6 * 86400000),
    },
    {
      descricao: "Finalizar projeto de API",
      data_criacao: new Date(agora - 9 * 86400000),
      data_prevista: new Date(agora + 1 * 86400000),
      situacao: "em_andamento",
    },
    {
      descricao: "Apresentar trabalho da faculdade",
      data_criacao: new Date(agora - 8 * 86400000),
      data_prevista: new Date(agora - 2 * 86400000),
      situacao: "concluida",
      data_encerramento: new Date(agora - 1 * 86400000),
    },
    {
      descricao: "Fazer backup do sistema",
      data_criacao: new Date(agora - 7 * 86400000),
      data_prevista: new Date(agora - 5 * 86400000),
      situacao: "cancelada",
      data_encerramento: new Date(agora - 4 * 86400000),
    },
    {
      descricao: "Revisar código do colega",
      data_criacao: new Date(agora - 6 * 86400000),
      data_prevista: new Date(agora + 2 * 86400000),
      situacao: "em_andamento",
    },
    {
      descricao: "Ler artigo sobre arquitetura de software",
      data_criacao: new Date(agora - 5 * 86400000),
      data_prevista: new Date(agora + 3 * 86400000),
      situacao: "pendente",
    },
    {
      descricao: "Refatorar módulo de autenticação",
      data_criacao: new Date(agora - 4 * 86400000),
      data_prevista: new Date(agora - 1 * 86400000),
      situacao: "cancelada",
      data_encerramento: new Date(agora),
    },
    {
      descricao: "Testar integração com API externa",
      data_criacao: new Date(agora - 3 * 86400000),
      data_prevista: new Date(agora + 5 * 86400000),
      situacao: "pendente",
    },
    {
      descricao: "Criar documentação da aplicação",
      data_criacao: new Date(agora - 2 * 86400000),
      data_prevista: new Date(agora + 1 * 86400000),
      situacao: "pendente",
    },
    {
      descricao: "Organizar tarefas da sprint",
      data_criacao: new Date(agora - 1 * 86400000),
      data_prevista: new Date(agora + 4 * 86400000),
      situacao: "em_andamento",
    },
  ];

  await Tarefa.insertMany(tarefas);
  console.log("Seed concluído com sucesso.");
  await mongoose.disconnect();
};

seedTarefas().catch((err) => {
  console.error("Erro no seed:", err);
  mongoose.disconnect();
});
