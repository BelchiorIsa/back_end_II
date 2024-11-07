import express from 'express';
import { historico, ano, calculo, id } from './servicos/servico.js';
const app = express();

app.get('/historicoIPCA/ano', (req, res) => {
  const ano = req.query.ano;
  // const ipca = ano? historico 

});

app.get('/historicoIPCA/:id', (req, res) => {
  const id= parseInt(req.params.id);

});

app.get('/historicoIPCA/calculo', (req, res) => {
    const valor = parseFloat(req.query.valor)
    const dataInicialMes = parseInt(req.query.mesInicial)
    const dataInicialAno = parseInt(req.query.anoInicial)
    const dataFinalMes = parseInt(req.query.mesFinal)
    const dataFinalAno = parseInt(req.query.anoFinal)
  });

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});