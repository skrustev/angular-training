import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  providers: [ApiService]
})
export class PeopleListComponent implements OnInit {

    public people: Person[];

    constructor(protected api: ApiService) {
        this.api.people.subscribe(people => this.people = people);
    }

    ngOnInit() {
    }

}
