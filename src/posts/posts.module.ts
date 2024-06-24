// import { Module } from '@nestjs/common';
// import { PostsService } from './posts.service';
// import { PostsController } from './posts.controller';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from 'src/users/users.model';
// import { Post } from './posts.model';

// @Module({
//   providers: [PostsService],
//   controllers: [PostsController],
//   imports: [
//     SequelizeModule.forFeature([User, Post])
//   ]
// })
// export class PostsModule {}

import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Post } from './posts.model';
import { FilesModule } from '../files/files.module'; // Убедитесь, что путь корректен

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User, Post]),
    FilesModule // Убедитесь, что FilesModule импортирован
  ],
})
export class PostsModule {}


