import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @Input() graphStyle: string;
  @Input() title: string;
  @Input() data: any[];
  @Input() colorScheme: any;
  @Input() xLabel: string;
  @Input() yLabel: string;

  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  view: any[] = [1100, 400];

  constructor() { }

  ngOnInit(): void {
  }

}
