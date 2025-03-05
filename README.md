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
    <li><a href="#database">Database Schema</a></li>
    <li><a href="#routes">Routes</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project / App

The Holistic Health Haven backend is a REST API built with Express, Knex, and a PostgreSQL database to serve data to the frontend. It also integrates with Stripe's API to process one-time payments.

### Built With

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- ![PostgreSQL][PostgreSQL-shield]
- ![Express][Express-shield]
- ![NodeJS][NodeJS-shield]
- ![JavaScript][JavaScript-shield]
- ![Knex][Knex-shield]
- ![Stripe][Stripe-shield]

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

<!-- DATABASE -->

## Database Schema

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<img width="255" alt="Screenshot 2025-03-04 at 6 32 30 PM" src="https://gist.github.com/user-attachments/assets/d2af7eb0-f720-4576-b6ea-9e159faaab67" />

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
[NodeJS-shield]: https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white
[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black
[Knex-shield]: https://img.shields.io/badge/Knex.js-D26B38.svg?style=for-the-badge&logo=knexdotjs&logoColor=white
[Stripe-shield]: https://img.shields.io/badge/Stripe-635BFF.svg?style=for-the-badge&logo=Stripe&logoColor=white
