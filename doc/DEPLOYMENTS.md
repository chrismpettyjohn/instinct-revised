<img src="https://i.imgur.com/gOi5doh.png"/>

## Suggested Server Hosting
I personally prefer to use [Vultr](https://vultr.com) or [DigitalOcean](https://digitalocean.com) for cheap web hosting.  As long as you're sticking
with the officially recommended Arcturus setup, a linux server is your best bet for budget and performance.

In terms of static assets such as your SWF files, Nitro assets or Instinct assets you may host them through Netlify.

## Deploying Web Assets
* Build your packages  (from the root of Instinct)
```
yarn build
```
* Edit your API prefix for your web app by modifying the env (from the root of your theme web)
* Build your web app (from the root of your theme web)
```
yarn build:prod
```
* Upload your build folder to Netlify, Github Pages, etc
 
## Backend Server
The backend must be served as a static.  You do not run it alongside IIS, nor any otherside server with the exception of using NGINX
for a reverse proxy.  
* From the root of your theme api on your server
```
yarn start
```
