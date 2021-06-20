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

You can download NodeJS here: https://nodejs.org/en/download/
<hr/>

#### Yarn
Yarn is an alternative package manager for NodeJS over the default NPM.  Yarn is made by the Facebook team and has a few additional perks
such as faster speeds and most importantly; yarn workspaces.  Workspaces allows Instinct to have it's multi library setup that allows for
faster custom work.

You can install Yarn after downloading Node by running:
 ```
npm i yarn -g
 ```
Please note: If it asks you to run as `sudo` it's okay.  Some installations may have incorrect permissions requiring root access to npm global
