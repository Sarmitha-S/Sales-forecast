import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  @ViewChild('feature') siblingFeatureLink: ElementRef;
  @Output() siblingFeature = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.siblingFeature.emit(this.siblingFeatureLink);
  }
  featureData = [
    {
      image: '../../../assets/Images/predictFeature.jpg',
      title: 'MongoDB',
      content:
        'MongoDB is commonly utilized for data storage of user login credentials and prediction results due to its capability to handle semi-structured or unstructured data, ease of use, and scalability.',
    },
    {
      image: '../../../assets/Images/visualizationFeature.jpg',
      title: 'SARIMAX model',
      content:
        'The SARIMAX model is a popular choice for time series analysis and prediction due to its ability to incorporate seasonality, trend, and exogenous variables into the model.',
    },
    {
      image: '../../../assets/Images/saveFeature.jpg',
      title: 'Power BI',
      content:
        'The feature to download forecast results as a CSV file can be further utilized for visualization using Power BI.',
    },
  ];
}
