import { Injectable } from '@nestjs/common'
import { Task } from './entitie/example.dto'

@Injectable()
export class AppService {
  getHello() {
    const example = new Task(1, 'title', 'description', true)
    return {
      message: 'Hello World!',
      status: 200,
      data: example,
    }
  }
}
