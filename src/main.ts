import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const PORT: number = Number(process.env.PORT) || 3000
  await app.listen(PORT)
}
bootstrap()
  .then(() => console.log('Server started', process.env.PORT))
  .catch(console.error)
