import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'lib-ng-star',
  templateUrl: './ng-star.component.html',
  styleUrls: ['./ng-star.component.css']
})
export class NgStarComponent implements OnChanges {
  totalStars = 5;
  remStars = 0; remStarsArray;
  currentStars = 0; currentStarsArray;
  decimal = 0;

  // tslint:disable-next-line:no-input-rename
  @Input('rating') rating;

  ngOnChanges() {
    this.currentStars = Math.floor(this.rating);
    this.currentStarsArray = Array(this.currentStars).fill(0);
    this.remStars =  this.totalStars - this.currentStars - 1;
    if (!(this.remStars < 0)) {
      this.remStarsArray = Array(this.remStars).fill(0);
    }
    this.decimal =  Math.ceil((this.rating - this.currentStars) * 10);
    console.log(this.decimal);
  }
  getClass() {
    return `gradient${this.decimal}`;
  }

}
