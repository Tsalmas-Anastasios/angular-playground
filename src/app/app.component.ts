import { Component } from '@angular/core';
import { UtilsService } from './services/utils-service.service'; // <-
import { HttpClient } from '@angular/common/http';
import * as lodash from 'lodash';
import * as moment from 'moment-timezone';
import * as swal from 'sweetalert2';


class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  meta?: any;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'angular-playground';

  public users: User[] = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Makridis',
      email: 'john@tourmie.com',
      country: 'GR',
      meta: {
        ip: '127.0.0.1',
        // browser: {
        //   name: 'Chrome',
        //   version: '125.0.1',
        //   os: {
        //     brand: 'windows',
        //     version: 10
        //   }
        // }
      }
    },
    { id: 2, first_name: 'Anastasios', last_name: 'Tsalmas', email: 'tsalmas@tsalmas.com', country: 'GR' },
    { id: 3, first_name: 'John', last_name: 'Smith', email: 'smith@tourmie.com', country: 'UK' },
  ];

  public repos: any[] = [];


  constructor(
    private http: HttpClient,
    private utilsService: UtilsService
  ) {



  }



  async ngOnInit(): Promise<void> {



  }



  async testPromises(): Promise<void> {

    // Option 1 - Wait for each promise (one promise at time)
    // await this.utilsService.delay(3);
    // const myRepos = await this.http.get<any[]>(`https://api.github.com/users/johnmakridis/repos`).toPromise();
    // const randomRepos = await this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise();
    // const randomRepos1 = await this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise();
    // const randomRepos2 = await this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise();
    // const randomRepos3 = await this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise();
    // const randomRepos4 = await this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise();
    // await this.utilsService.delay(3);


    // Option 2 - Execute all promises in parallel
    // const promises: [
    //   Promise<any>,
    //   Promise<any>,
    //   Promise<any>,
    //   Promise<any>,
    //   Promise<any>,
    //   Promise<any>,
    //   Promise<void>
    // ] = [
    //     this.http.get<any[]>(`https://api.github.com/users/johnmakridis/repos`).toPromise(),
    //     this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise(),
    //     this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise(),
    //     this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise(),
    //     this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise(),
    //     this.http.get<any[]>(`https://api.github.com/users/mhevery/repos`).toPromise(),
    //     this.utilsService.delay(5)
    //   ];


    // const [
    //   myRepos,
    //   randomRepos,
    //   randomRepos1,
    //   randomRepos2,
    //   randomRepos3,
    //   randomRepos4,
    // ] = await Promise.all(promises);


    // console.log({
    //   myRepos: myRepos,
    //   randomRepos: randomRepos,
    //   randomRepos1: randomRepos1,
    //   randomRepos2: randomRepos2,
    //   randomRepos3: randomRepos3,
    //   randomRepos4: randomRepos4,
    // });




    // Method 2
    // const repos = this.http.get(`https://api.github.com/users/johnmakridis/repos`)
    //   .subscribe((data) => {
    //     console.log(data);
    //     return data;
    //   }, (error) => {
    //     console.log(error);
    //   });



  }



  async testPromisesWithErrorHandling(): Promise<void> {

    try {

      const myRepos = await this.http.get<any[]>(`https://api.github.com/users/johnmakridis/repos`).toPromise();
      this.repos = myRepos;

    } catch (error) {

      if (error?.error?.message === 'Not Found') {

        swal.default.fire({
          title: 'Error!',
          html: error.error.message,
          icon: 'error'
        })

      }

      else
        swal.default.fire({
          title: 'Error!',
          html: 'Something went wrong, please try again later.',
          icon: 'error'
        })

    }

  }



  testLodash(): void {

    // Lodash
    // Filtering with Lodash
    const ukUsers = lodash.filter(this.users, (user) => user.country === 'UK');


    // Group
    const usersGroupedByCountry = lodash.groupBy(this.users, (user) => user.country);


    // Find a record
    const customer = lodash.find(this.users, (user) => user.last_name === 'Makridis');


    // Boolean array search
    const customerExists = lodash.some(this.users, (user) => user.first_name === 'Anastasios');


    console.log('testLodash()');

  }



  // Moment
  testMoment(): void {

    const date = '2000-01-01';
    const age = moment().diff(moment(date), 'years');
    const newDate = moment(date).add(2, 'weeks');
    const newDate2 = moment(date).subtract(2, 'years');

    console.log('testMoment()');

  }



  optionalChaining(): void {


    // Optional chaining
    const user = this.users[0];

    if (user?.meta?.browser?.os?.brand === 'windows') {
      console.log(user.meta.browser.os.brand);
    }


  }



}








