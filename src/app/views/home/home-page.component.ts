import { UtilsServiceService } from '../../services/utils-service.service';
import { User, Address } from '../../models';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public user: User;

  constructor(
    private utilsService: UtilsServiceService
  ) { }

  async ngOnInit(): Promise<void> {

    // Object initialization
    this.user = new User({
      first_name: 'John',
      last_name: 'Doe',
      email: 'test@example.com',
      privileges: {
        blog_post_read: true
      },
      // addresses: [
      //   new Address({ street: 'Archanon 1', city: 'Heraklion', state: 'Crete', country: 'GR' }),
      //   new Address({ street: 'Ikarou 10', city: 'Heraklion', state: 'Crete', country: 'GR' })
      // ]
    });


    // Loop
    // for (const address of this.user.addresses) // +
    //   console.log(address);


    // for (let i = 0; i < this.user.addresses.length; i++)
    //   console.log(this.user.addresses[i]);


    // this.user.addresses.forEach(address => {
    //   console.log(address);
    // });


    // Optional Chaining
    // if (this.user?.privileges?.blog_post_read)
    // console.log('can read blog post');




    // console.log('1');
    // const userAddresses = await this.utilsService.getUserAddress();
    // const userName = await this.utilsService.getUserName();
    // console.log('2');



    console.log('1');

    const promises: [
      Promise<Address[]>,
      Promise<string>
    ] = [
        this.utilsService.getUserAddress(),
        this.utilsService.getUserName()
      ];

    const [addresses, name] = await Promise.all(promises);


    console.log({
      addresses: addresses,
      name: name
    });


    this.user.addresses = addresses;


    console.log('2');




  }




}
