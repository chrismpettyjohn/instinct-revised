<img src="https://i.imgur.com/gOi5doh.png"/>

## Getting Started
Welcome to Instinct.  Our project is built with Node and Typescript making it vastly different from the typical PHP setup most retros follow.
This guide will help ease your journey into Instinct and give you a good foundation to start building with.

## 1. Resources to Download
You want to download the following resources to use Instinct correctly.  Please note that this tutorial will be made for mac users, so apologies
to any Windows users who may have to go a different path.
<hr/>

#### Code Editor
A code editor is useful when managing your hotel's source code.  While you won't be taught how to modify the code of Instinct here,
a code editor will be useful for modifying your environment variables that control Instinct.

A good code editor to start out with would be Visual Code: https://code.visualstudio.com/
<hr/>

#### Database Software
Managing your database is an essential part of hotel development and working with Instinct.  For the sakes of this tutorial, you will 
be using MariaDB with the full Instinct SQL.  Please note, if you're migrating to Instinct you will have to go a different path.

Download MariaDB: https://downloads.mariadb.org/

<hr/>

#### NodeJS
NodeJS is the underlying runtime that executes Instinct on your computer.  It allows Javascript code that normally is written for the browser,
also run on your computer natively.  

You can download NodeJS here: https://nodejs.org/en/download/current/
<hr/>

#### Yarn
Yarn is an alternative package manager for NodeJS over the default NPM.  Yarn is made by the Facebook team and has a few additional perks
such as faster speeds and most importantly; yarn workspaces.  Workspaces allows Instinct to have it's multi library setup that allows for
faster custom work.

You can install Yarn after downloading Node by running:
 ```
npm i yarn -g
 ```
Please note: If it asks you to run as `sudo` it's okay.  Some installations may have incorrect permissions requiring root access to npm globsl.
<hr />

## 2. Setup Database
For the sake of the tutorial, we are going to use the CLI which is included with MariaDB.  From the same folder as
the Full Instinct SQL, please execute the following in your terminal:
```bash
mysql -u root -p > blah.sql
```

## 3. Install Dependencies
Instinct uses quite a few third party libraries to help provide functionality.  Please install these dependencies by executing the following
command from the root of your Instinct project.
```bash
yarn
```

## 4. Setup API Environment
The environment variables file tells Instinct what port to run on and database to use.

Please go into the folder `demo/api` and perform the following:
1. Create a copy of `.env.example` named `.env` 
2. Modify the database variables to your new credentials from step 2

## 5. Start Apps
From the folder `demo/api` please execute `yarn start`.  In a new terminal window please go to the folder `demo/web` and execute
`yarn start`

## 6. Success
You should see Instinct render in your browser if you setup your environment correctly.  For issues, please file a help thread on the forum
you downloaded Instinct from.

API Success Example
<img src="https://i.imgur.com/A5d7yO6.png" />

Web Success Example
<img src="https://i.imgur.com/QU6awJ1.png" />
