import { env } from './env'
import { app } from './app'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('Servidor rodando em http://localhost:3333')
  })
