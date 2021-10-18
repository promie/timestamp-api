# Timestamp Microservice
Timestamp Microservice is an [FCC Backend Development and APIs project challenge](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice). 
This app is written using Node, Express, TypeScript and Jest.

## Requirements
- Node 14.18.1 LTS
- NPM 6.x

## Installation
```bash
npm install
```

## How to Run
### Local
To run the app in development mode locally, run the below command on the root directory:
```bash
npm run dev
```

An express server will spin up on `http://localhost:5000/`.

### Usage
There are two endpoints:
1. `/api/v1/timestamps`

The response returns the current unix and utc date and time.

2. `/api/v1/timestamps/:date`

This response returns the unix and utc date and time based on the users input.

## How to run tests
Run all tests (both unit and integration)
```bash
npm run test
```

Run unit tests
```bash
npm run test:unit
```

Run integration tests
```bash
npm run test:integration
```

