## Auth Nestjs

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## API Documentation

##### Project will start at port 4040 and base url will be

	`http://localhost:4040`


- ### Create User

    
	Method: POST
	Url: "/user/register"
	content-type: application/json
	body = {
        name: string ,
        firstName: string,
        lastName: string,
        email: string ,
        password: string
    }
	

- ### Login

In this api, we are matching a password with a stored hashing password. if password and email are correct then we are sending a jwt token for API call validation.

    
	Method: POST
	Url: "/auth/login"
	content-type: application/json
	body = {
        username: string ,
        password: string
    }
	

