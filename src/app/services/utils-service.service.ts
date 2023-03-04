import { Injectable } from '@angular/core';
import { Address } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  test(): number {
    return 1;
  }



  async delay(seconds: number): Promise<void> {

    return new Promise((resolve, reject) => {

      setTimeout(resolve, seconds * 1000)

    });

  }



  getUserAddressesSync(): Address[] { // synchronous method
    return [];
  }


  async getUserAddress(): Promise<Address[]> {

    // this.delay(3)
    //   .then(() => {
    //     // ....
    //   })
    //   .catch((error) => {
    //     // handle error of delay
    //   });


    try {

      await this.delay(3); // HTTP Call στο backend


      // Response from backend

      const response = [
        { street: 'Archanon 1', city: 'Heraklion', state: 'Crete', country: 'GR' },
        { street: 'Ikarou 10', city: 'Heraklion', state: 'Crete', country: 'UK' }
      ];


      const addresses: Address[] = [];

      for (const address of response)
        addresses.push(new Address(address));


      // return Promise.resolve()
      // return Promise.reject()

      return Promise.resolve(addresses);


    } catch (error) {

      // handle error (e.g. error log)


      return Promise.reject(error);

    }


  }



  async getUserName(): Promise<string> {

    try {

      await this.delay(2); // HTTP Call στο backend

      return Promise.resolve('Mitsos');


    } catch (error) {

      // handle error (e.g. error log)


      return Promise.reject(error);

    }


  }

}