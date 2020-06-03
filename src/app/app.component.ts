import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'tpr-frontend';

    data = {};

    constructor(private apollo: Apollo) {
    }

    ngOnInit(): void {
        this.apollo.query<any>({
            query: gql`
            {
                user {
                    first_name
                    id
                    last_name
                    created_at
                    rates {
                      id
                      rate
                      restaurant {
                        name
                      }
                    }
                  }
              }
              `,
        }).subscribe(({data, loading}) => {
            this.data =  data;
        });
    }

}
