# NgStar

## This Angular library generates stars for rating provided with properties to control every aspect of generated star.

## Supported Feature / Updates:
1) Star ratings with decimal support (upto one precision).
2) Selected star color and unselected star color can be controlled as per your need.
3) Star size can be controlled as per your need.
4) Total stars can be controlled as per your need.

## To use this library:
1) Npm install ng-star
2) In angular component wherever you want to use it, import this component and 		then
   `<lib-ng-star [rating]="7.5" [selectedColor]="'blue'" [unselectedColor]="'black'" [starSize]="30" [totalStars]="10"></lib-ng-star>`
   7.5 stars with blue color and remaining 2.5 stars with black color will be generated where each star will have size of 30 px.

## Published On NPM 'https://www.npmjs.com/package/ng-star'


This Angular library generates stars for rating provided with properties to control every aspect of generated star.
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sami-colon/ng-star">
    <img src="images/image1.png" alt="Logo" width="1000" height="500">
  </a>

<h3 align="center">Ng Star</h3>

  <p align="center">
    This Angular library generates stars for rating provided with properties to control every aspect of generated star.
    <br />
    <a href="https://github.com/sami-colon/ng-star"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/sami-colon/ng-star/issues">Report Bug</a>
    ·
    <a href="https://github.com/sami-colon/ng-star/issues">Request Feature</a>
  </p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[ng-star](https://www.npmjs.com/package/ng-star)
<p>
  This Angular library generates stars for rating provided with properties to control every aspect of generated star.
</p>


### Built With

* [Angular 9]()
* [Css](https://developer.mozilla.org/en-US/docs/Learn/CSS)
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
1) I have used boostrap 4 and font awesome cdn , so make sure you are connected to internet or boostrap and fontawesome are exported for use.

### Installation

1. install package from npmjs
   ```sh
   npm install ng-star
   ```



<!-- USAGE EXAMPLES -->
## Usage

example = `<lib-ng-star [rating]="7.5" [selectedColor]="'blue'" [unselectedColor]="'black'" [starSize]="30" [totalStars]="10"></lib-ng-star>`

For the stars to generate correctly, **import font awesome and boostrap in your project or connect to internet**:
You can use these properties to control how your stars will appear.
1) `[rating] = "number" ` This is used to provide rating to the component. Precision of upto 1 point after decimal is supported.(default 0)
2) `[selectedColor]="'blue'"` This is used to provide color to selected stars(in this ex blue).(default yellow)
3) `[unselectedColor]="'black'"` This is used to provide color to unselected stars(in this ex black).(default white)
4) `[starSize]="number"` This is used to provide size of each star in px(default 30px).
5) `[totalStars]="number"` This is used to provide total number of stars(default 5).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Abhishek Kumar - [Email](mailto:abhishek@neweradevelopers.com)

Project Link: [https://github.com/sami-colon/ng-star](https://github.com/sami-colon/ng-star)



## sample images
<img src="images/image1.png" alt="Logo">

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/sami-colon/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/sami-colon/ng-star/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sami-colon/repo.svg?style=for-the-badge
[forks-url]: https://github.com/sami-colon/ng-star/network/members
[stars-shield]: https://img.shields.io/github/stars/sami-colon/repo.svg?style=for-the-badge
[stars-url]: https://github.com/sami-colon/ng-star/stargazers
[issues-shield]: https://img.shields.io/github/issues/sami-colon/repo.svg?style=for-the-badge
[issues-url]: https://github.com/sami-colon/ng-star/issues
[license-shield]: https://img.shields.io/github/license/sami-colon/repo.svg?style=for-the-badge
[license-url]: https://github.com/sami-colon/ng-star/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sami-colon

