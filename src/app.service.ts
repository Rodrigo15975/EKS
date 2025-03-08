import { Injectable } from '@nestjs/common'
import { Task } from './entitie/example.dto'

@Injectable()
export class AppService {
  getHello() {
    const example = new Task('title', 'description', true)
    return {
      message: 'Get data',
      status: 200,
      data: example,
    }
  }
}
