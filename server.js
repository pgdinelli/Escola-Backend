import app from './app';

const port = 3001;
const url = `http://localhost:${port}`;

app.listen(port, () => {
    console.log('');
    console.log(`Servidor executando na porta: ${port}`);
    console.log(`Acesse em: ${url}`);
});
