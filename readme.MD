### How to run the code

1. In order for the front end to work, backend and database needs to be started as well, please spin up docker containers to initialize the testing database first.

```
docker compose up --build postgres adminer
```

2. Next please cd into back folder to start the backend api. copy .env copy file into .env file

```
cd back
npm run install
npm run start
```

3. Front end angular project is saved in front folder, please cd into that folder to install and launch the application. copy .env copy file into .env file

```
cd front
npm run install
npm run start
```

4. Default log in username and password

```
username: tony
password: 123123
```
