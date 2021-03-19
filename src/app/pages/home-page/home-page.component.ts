import {Component, OnInit} from '@angular/core';

interface Data {
  title: string;
  data: any[];
  xAxisLabel: string;
  yAxisLabel: string;
  colorScheme: any;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  firstData: Data = {
    title: 'Aperçu des 10 villes les plus visitées par voie aérienne aux États-Unis en 2013 :',
    data: [
      {
        name: 'Chigaco',
        value: 17283
      },
      {
        name: 'Atlanta',
        value: 17215
      },
      {
        name: 'Los Angeles',
        value: 16174
      },
      {
        name: 'Boston',
        value: 15508
      },
      {
        name: 'Orlando',
        value: 14082
      },
      {
        name: 'Charlotte',
        value: 14064
      },
      {
        name: 'San Francisco',
        value: 13331
      },
      {
        name: 'Fort Lauderdale',
        value: 12055
      },
      {
        name: 'Miami',
        value: 11728
      },
      {
        name: 'Washington',
        value: 9705
      },
    ],
    xAxisLabel: 'Nombre de vols',
    yAxisLabel: 'Villes',
    colorScheme: {
      domain: ['#fab1a0', '#e17055', '#ffeaa7']
    }
  };

  secondData: Data = {
    title: 'Les 336 776 vols aux États-Unis en 2013 :',
    data: [
      // {
      //   name: 'Total',
      //   value: 336776
      // },
      {
        name: 'Validés ',
        value: 328521
      },
      {
        name: 'Annulés',
        value: 8255
      },
    ],
    xAxisLabel: 'Statut du vol',
    yAxisLabel: 'Nombre de vols',
    colorScheme: {
      domain: ['#fab1a0', '#e17055', '#ffeaa7']
    },
  };

  constructor() {
  }

  ngOnInit() {
  }


}
