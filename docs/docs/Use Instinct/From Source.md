## Getting Started
Welcome to Instinct.  Our project is built with Node and Typescript making it vastly different from the typical PHP setup most retros follow.
This guide will help ease your journey into Instinct and give you a good foundation to start building with.

## 1. Resources to Download
Please download any resources needed from [here](Dependencies)
<hr />

## 2. Setup Database
For the sake of the tutorial, we are going to use the CLI which is included with MariaDB.  From the same folder as
the Full Instinct SQL, please execute the following in your terminal:
```bash
mysql -u username -p database_name < instinct-base.sql
```

## 3. Install Dependencies
Instinct uses quite a few third party libraries to help provide functionality.  Please install these dependencies by executing the following
command from the root of your Instinct project.
```bash
yarn
```

## 4. Build Packages
Instinct has quite a few packages and since you're using Instinct directly from source it's up to you to compile all of them.  No worries, this is
relatively quick and simple to do.  Run the following command from the root of Instinct
```bash
yarn build
```


## 5. Setup API Environment
The environment variables file tells Instinct what port to run on and database to use.

*  Please go into the folder `demo/<theme-folder>/api` and perform the following:
    1. Create a copy of `.env.example` named `.env`
    2. Modify the database variables to your new credentials from step 2

* Please go into the folder `demo/<theme-folder>/web` and perform the following:
    1. Create a copy of `.env.example` named `.env`

## 6. Start Apps
From the folder `demo/<theme-folder>/api` please execute `yarn start`.  In a new terminal window please go to the folder `demo/<theme-folder>/web` and execute
`yarn start`

## 7. Success
You should see Instinct render in your browser if you setup your environment correctly.  For issues, please file a help thread on the forum
you downloaded Instinct from.

API Success Example
<img src="https://i.imgur.com/A5d7yO6.png" />

Web Success Example
<img src="https://i.imgur.com/QU6awJ1.png" />
