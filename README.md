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
The app is deployed at  https://club-collab.herokuapp.com

The following are the routes that are available

## GET https://club-collab.herokuapp.com/users
## POST https://club-collab.herokuapp.com/signup

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

##POST https://club-collab.herokuapp.com/login

The body must include
    {
        email:
        password:
    }


```
