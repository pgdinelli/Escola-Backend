import app from './app';

const port = process.env.PORT;
const url = `http://localhost:${port}`;

app.listen(port);
