<a name="readme-top"></a>

<!-- PROJECT LOGO -->

  <!-- HEADER -->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Installation</a></li>
    <li><a href="#successes">Wins and Challenges</a></li>
    <li><a href="#backend">Backend Architecture</a></li>
    <li><a href="#database">Database Schema</a></li>
    <li><a href="#routes">Routes</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project / App

The Holistic Health Haven backend is a REST API built with Express, Knex, and a PostgreSQL database to serve data to the frontend. It integrates with Stripe's API to process one-time payments and implements image optimization with WebP conversion utilizing the library called Sharp.

## Built With

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- ![PostgreSQL][PostgreSQL-shield]
- ![Express][Express-shield]
- ![Sharp][Sharp-shield]
- ![NodeJS][NodeJS-shield]
- ![JavaScript][JavaScript-shield]
- ![Knex][Knex-shield]
- ![Stripe][Stripe-shield]
- ![Postman][Postman-shield]
- ![AWS][AWS-shield]

<!-- SETUP -->

## Setup

<p align="right">(<a href="#readme-top">back to top</a>)</p>
1. <strong>Clone down backend repository:</strong>

```
git clone https://github.com/alinix1/holistic-health-haven-BE.git
```

2. <strong>Install npm packages & start server:</strong>

`npm install` or `npm i`

`node index.js`

<!-- SUCCESSES -->

## Wins:

- Successfully designed and implemented a relational database with PostgreSQL
- Developed RESTful API routes with Express
- Integrated Stripe payment processing API

## Challenges:

- Researching and implementing image optimization with WebP conversion from PNG/JPG using the Sharp library
- Configuring AWS Elastic Beanstalk for deployment

<!-- BACKEND -->

## Backend Architecture

<p align="right">(<a href="#readme-top">back to top</a>)</p>

![Image](https://github.com/user-attachments/assets/0f65376a-1390-46a7-8c9d-1de5c120c5ca)

<!-- DATABASE -->

## Database Schema

<p align="right">(<a href="#readme-top">back to top</a>)</p>

![Image](https://github.com/user-attachments/assets/b929fdc3-cfe8-49b0-84a3-7fd366fec89e)

<!-- ROUTES -->

## Routes

<p align="right">(<a href="#readme-top">back to top</a>)</p>

| Routes                 | HTTP Methods | Description                                       |
| ---------------------- | ------------ | ------------------------------------------------- |
| /products              | GET          | display all holistic products                     |
| /products/:id          | GET          | display a specific holistic product, given its id |
| /reviews               | GET          | display all reviews                               |
| /reviews               | POST         | updates or adds a review from a customer          |
| /create-payment-intent | POST         | initiates payment with Stripe                     |

<!-- CONTACT -->

## Contact

Ali Nix | [![LinkedIn][linkedin-shield]][linkedin-url1]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url1]: https://www.linkedin.com/in/ali-nix-38b9b9126/
[PostgreSQL-shield]: https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white
[Express-shield]: https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white
[Sharp-shield]: https://img.shields.io/badge/sharp-99CC00.svg?style=for-the-badge&logo=sharp&logoColor=white
[NodeJS-shield]: https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white
[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black
[Knex-shield]: https://img.shields.io/badge/Knex.js-D26B38.svg?style=for-the-badge&logo=knexdotjs&logoColor=white
[Stripe-shield]: https://img.shields.io/badge/Stripe-635BFF.svg?style=for-the-badge&logo=Stripe&logoColor=white
[Postman-shield]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white
[AWS-shield]: https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white
