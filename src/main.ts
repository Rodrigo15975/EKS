import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
// import * as fs from 'fs'
// import { join } from 'path'
import { Logger } from '@nestjs/common'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const PORT = 3000

  // Leer secretos montados por el CSI Driver
  // const secretsPath = '/mnt/secrets-store'
  // const dbUser = fs.readFileSync(join(secretsPath, 'db-user'), 'utf8')
  // const dbPassword = fs.readFileSync(join(secretsPath, 'db-password'), 'utf8')

  // Logger.debug(`Database User: ${dbUser}`) // Imprime: admin
  // Logger.debug(`Database Password: ${dbPassword}`) // Imprime: securepassword123

  await app.listen(PORT, () => {
    Logger.verbose(`Server running on port ${PORT}`)
  })
}
bootstrap()
