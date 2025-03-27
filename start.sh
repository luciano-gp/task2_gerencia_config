#!/bin/bash

echo "Aguardando MongoDB iniciar..."

# Aguarda a porta 27017 estar disponível (máximo 30s)
for i in {1..30}; do
  nc -z mongo 27017 && break
  echo "Mongo ainda não disponível... tentando de novo"
  sleep 1
done

echo "Mongo está disponível! Rodando seed..."
npm run seed

echo "Iniciando a API..."
npm run start
