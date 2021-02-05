import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  @HttpCode(200)
  getAll() {
    return [
      {
        pid: 1,
        title: 'Post1',
        content: 'Post1.....',
      },
      {
        pid: 2,
        title: 'Post2',
        content: 'Post2.....',
      },
      {
        pid: 3,
        title: 'Post3',
        content: 'Post3.....',
      },
      {
        pid: 4,
        title: 'Post4',
        content: 'Post4.....',
      },
    ];
  }
}
