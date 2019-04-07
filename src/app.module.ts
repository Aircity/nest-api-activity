import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicModule } from './topic/topic.module';
import { UserModule } from './user/user.module';
import { Topic } from './topic/topic.entity';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database.sqlite3',
      entities: [Topic, User],
      synchronize: true,
    }),
    TopicModule,
    UserModule,
  ],
})
export class ApplicationModule {}
