import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicModule } from './topic/topic.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TopicModule, UserModule],
})
export class ApplicationModule {}
