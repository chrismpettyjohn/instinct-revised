## Getting Started
Welcome to Instinct.  Our project is built with Node and Typescript making it vastly different from the typical PHP setup most retros follow.
This guide will help ease your journey into Instinct and give you a good foundation to start building with.

**Please note:**
<br />
This guide is for users who wish to create their own hotel using Instinct.

## 1. Resources to Download
Please download any resources needed from [here](Dependencies)
<hr />

## 2. Fork the Example Project
We already went through the difficulty of setting up the boilerplate for customizing Instinct!  Run the following command
to create a new fork for your own changes.
```bash
git clone https://github.com/chrismpettyjohn/Instinct-App.git
```

## 3. Install Dependencies
Run the following command in both the `api` and `web` directory
```bash
yarn
```

## 4. Configure the API Environment
From the `api` directory, copy the `.env.example` to a new file named `.env`. Once the file is copied, please update the values within `.env` if necessary

```bash
cp .env.example .env
```

## 5. Start your development servers locally
Run the following command in both the `api` and `web` directory
```bash
yarn start
```

## 6. Production Builds
If you'd like to learn more about running Instinct in production, please check out our [Production Builds](In Production.md) guide
