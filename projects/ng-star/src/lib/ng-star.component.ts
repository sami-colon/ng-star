import {
  Component,
  Input,
  OnChanges, OnInit,
} from '@angular/core';

@Component({
  selector: 'lib-ng-star',
  templateUrl: './ng-star.component.html',
  styleUrls: ['./ng-star.component.css']
})
export class NgStarComponent implements OnChanges, OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('rating') rating;
  // tslint:disable-next-line:no-input-rename
  @Input('selectedColor') selectedColor;
  // tslint:disable-next-line:no-input-rename
  @Input('unselectedColor') unselectedColor;
  // tslint:disable-next-line:no-input-rename
  @Input('starSize') starSize;
  // tslint:disable-next-line:no-input-rename
  @Input('totalStars') totalStars;

  remStars = 0; remStarsArray;
  currentStars = 0; currentStarsArray;
  decimal = 0;
  gradient = ``;

  ngOnInit(): void {
    if (!this.rating) {
      this.rating = 0;
    }
    if (!this.selectedColor) {
      this.selectedColor = 'yellow';
    }
    if (!this.unselectedColor) {
      this.unselectedColor = 'white';
    }
    if (!this.starSize) {
      this.starSize = '30';
    }
    if (!this.totalStars) {
      this.totalStars = 5;
    }
    // tslint:disable-next-line:max-line-length
    this.gradient = `linear-gradient(to right, ${this.selectedColor} ${this.decimal * 10}%, ${this.unselectedColor} ${this.decimal * 10}% 100%)`;
  }
  ngOnChanges() {
    this.currentStars = Math.floor(this.rating);
    this.currentStarsArray = Array(this.currentStars).fill(0);
    this.remStars =  this.totalStars - this.currentStars - 1;
    if (!(this.remStars < 0)) {
      this.remStarsArray = Array(this.remStars).fill(0);
    }
    this.decimal =  Math.ceil((this.rating - this.currentStars) * 10);
    // tslint:disable-next-line:max-line-length
    this.gradient = `linear-gradient(to right, ${this.selectedColor} ${this.decimal * 10}%, ${this.unselectedColor} ${this.decimal * 10}% 100%)`;
  }
}
