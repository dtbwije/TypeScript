import { Injectable } from '@nestjs/common';
import { Address } from './entity/Address';
import { AppDataSource } from './data-source';
import { User } from './entity/User';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await this.insertUsersLoop();
    return 'Hello World!';
  }


  async insertUsersLoop(durationSeconds = 2, intervalSeconds = 1) {
    const userRepo = AppDataSource.getRepository(User);
    const addressRepo = AppDataSource.getRepository(Address);
    let counter = 0;
    const maxCount = durationSeconds / intervalSeconds;

    return new Promise<void>((resolve) => {
      const interval = setInterval(async () => {
        counter++;

        const user = new User();
        user.lastName  = `last_${counter}`;
        user.firstName = `first_${counter}`;
        user.age =counter;

        const address = new Address();
        address.addressLine = `Street_${counter}`;
        address.City = `City`;
        address.streetAddress = `Country_${Math.floor(Math.random() * 5)}`;
        user.address = address;

        try {

          await addressRepo.insert(address);
          console.log(`Inserted User_${counter}`);
          await userRepo.insert(user);
          console.log(`Inserted User_${counter}`);
        } catch (err) {
          console.error(`Insert failed:`, err);
        }

        if (counter >= maxCount) {
          clearInterval(interval);
          console.log('User insertion loop completed.');
          resolve();
        }
      }, intervalSeconds * 1000);
    });
  }
}
