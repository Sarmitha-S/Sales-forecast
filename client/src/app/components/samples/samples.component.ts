import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css'],
})
export class SamplesComponent implements OnInit {
  @ViewChild('samples') siblingSamplesLink: ElementRef;
  @Output() siblingSamples = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.siblingSamples.emit(this.siblingSamplesLink);
  }
  samplesData = [
    {
      image: '../../../assets/Images/PredictionImage_1.png',
      alt: 'sample-image-1',
      content: 'Mean Absolute Percentage Error : 6.088%',
      for: 'item-1',
      id: 'sample-1',
    },
    {
      image: '../../../assets/Images/PredictionImage_2.png',
      alt: 'sample-image-2',
      content: 'Mean Absolute Error : 17.998',
      for: 'item-2',
      id: 'sample-2',
    },
    {
      image: '../../../assets/Images/PredictionImage_3.png',
      alt: 'sample-image-3',
      content: 'Mean Squared Error : 12.344',
      for: 'item-3',
      id: 'sample-3',
    },
  ];
}
