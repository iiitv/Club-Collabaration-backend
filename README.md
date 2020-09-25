# Club Collabaration Backend

Languages Used

- Node.js
- Express
- MongoDB

# Setup Instructions:

## Installation

```bash
git clone https://github.com/iiitv/Club-Collabaration-backend/
cd Club-Collabaration-backend
yarn install
```

## Running

```bash
yarn start
```

## DEPLOYMENT

```
The follwing are the routes that are available

## GET https://club-collab.herokuapp.com/users this gives all the register users
## POST https://club-collab.herokuapp.com/signup this is post request

       the body must include
        {
            name: (min length:3)
            email: valid one and unique
            password:(min length:6)
        }
        sample one
         {
            "name":"vadodara",
            "email":"koy@wi8o.com",
            "password":"rybaopd"

         }

##POST https://club-collab.herokuapp.com/login this is post request

the body must include
{
email: valid one
password:(min length:6)
}


```
