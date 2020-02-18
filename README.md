# Own HQ Trivia!
## The project is not finished and abandoned, but I left the API and script for the app patch for you

This repository contains everything you need to run your HQ trivia!

## Requirements
- ADB
- [APKTool](https://ibotpeaches.github.io/Apktool/)
- JDK
- [Node.js](https://nodejs.org/en/)
- PostgreSQL
- [Redis](https://redis.io/)
- Discord (for controlling shows/users)

## Instructions for patch app
1. Install all requirements
2. Download [HQ Trivia apk (v1.37.0)](https://file.jsop.me/20/02/HQTrivia1370.apk)
3. Run `./patch-hq.sh HQTrivia.apk http(s)://YOUR_HOST:YOUR_PORT/api/`
4. Install your patched app

## Instructions for start API
Install yarn:
```sh
npm install -g yarn
```

Install dependencies:
```sh
yarn
```

Set environment (vars):
```sh
cp .env.example .env
nano .env
```

Start server:
```sh
yarn start
```