import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import {AuthModule} from "../auth/auth.module";
import { Post } from 'src/posts/posts.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RolesModule,
    forwardRef( () => AuthModule),    
  ],
    exports: [
      UsersService,      
    ]
})
export class UsersModule {}



// import {forwardRef, Module} from '@nestjs/common';
// import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
// import {SequelizeModule} from "@nestjs/sequelize";
// import {User} from "./users.model";
// import {Role} from "../roles/roles.model";
// import {UserRoles} from "../roles/user-roles.model";
// import {RolesModule} from "../roles/roles.module";
// import {AuthModule} from "../auth/auth.module";
// // import {Post} from "../posts/posts.model";

// @Module({
//   controllers: [UsersController],
//   providers: [UsersService],
//   imports: [
//       SequelizeModule.forFeature([User, Role, UserRoles]),
//       RolesModule,
//       forwardRef(() => AuthModule),
//   ],
//     exports: [
//         UsersService,
//     ]
// })
// export class UsersModule {}