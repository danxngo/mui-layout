**README.md**

# Installation and Running Guide for PNPM App

This guide will walk you through the installation process and running of a PNPM (Plug'n'Play NPM) app.

## Prerequisites

Before proceeding, ensure you have the following installed on your system:

- Node.js and npm: PNPM is distributed through npm, so you need to have Node.js installed. You can download and install Node.js from [here](https://nodejs.org/).
- Git: You need Git to clone the repository. You can download and install Git from [here](https://git-scm.com/).
- PNPM: You can install PNPM globally using npm:
- Docker: You need Docker to run the application in a containerized environment.

```bash
npm install -g pnpm
```

## Installation

1. Clone the repository to your local machine using Git:

```bash
git clone  https://github.com/danxngo/mui-layout.git
```

2. Navigate to the project directory:

```bash
cd mui-layout
```

3. Install dependencies using PNPM:

```bash
pnpm install
```

This will install all the necessary dependencies specified in the `package.json` file.

## Running the App

Once the installation is complete, you can run the app using the following command:

```bash
pnpm dev
```

This command will start the application and typically open it in your default web browser. If not, you can access the app by navigating to `http://localhost:5173` in your browser.

## Additional Commands

### Build

To build the app for production, you can use the following command:

```bash
pnpm build
```

This will create an optimized production build of the app in the `dist` directory.

### Graphql Types generation

To generate graqhql interface 

```bash
pnpm codegen
```
