# Etapa 1: build
FROM node:20 AS builder

WORKDIR /app

# Copia apenas arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante do projeto e compila
COPY . .
RUN npm run build

# Etapa 2: produção
FROM node:20

WORKDIR /app

# Copia o diretório compilado e arquivos essenciais
COPY --from=builder /app/dist ./dist
COPY package*.json ./
COPY start.sh ./

# Instala apenas as dependências de produção
RUN npm install --omit=dev

# Dá permissão para executar o start.sh
RUN chmod +x ./start.sh

# Define variáveis de ambiente padrão
ENV NODE_ENV=production

# Comando de inicialização
CMD ["./start.sh"]
