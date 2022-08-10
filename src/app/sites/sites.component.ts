import { Component, OnInit } from '@angular/core';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  data: any;

  constructor(private coreservice: CoreService) { }

  ngOnInit(): void {

    this.coreservice.get('http://localhost:8080/sites').subscribe((result: any) => {
      console.log(result);
      return this.data = result
    });
  }

  sortName() {
    this.coreservice.get('http://localhost:8080/sortname').subscribe((result: any) => {
      console.log(result);
      return this.data = result;
    });
  }

  sortNewest() {
    this.coreservice.get('http://localhost:8080/sortnewest').subscribe((result: any) => {
      console.log(result);
      return this.data = result;
    });
  }

  sortOldest() {
    this.coreservice.get('http://localhost:8080/sortoldest').subscribe((result: any) => {
      console.log(result);
      return this.data = result;
    });
  }

}
