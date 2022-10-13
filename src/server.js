const app = require('./app');
const connection = require('./models/database/connection');
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, async () => {
  console.log(`Escutando na porta ${process.env.PORT}`);

  const [result] = await connection.execute('SELECT * FROM products');
  if (result) console.log('funciona');
});
