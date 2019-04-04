# Welcome to Esc

Hi! this tutorial will get you started on how to start working with **ESC**.

## Getting started

1. Clone the repository
2. Switch to designated branch
3. Install dependencies from the root directory
4. Starting the project from a localhost server

## Cloning the repository

Open the git bash terminal in your preferred directory and run

    git clone https://github.com/mthamayor/esc.git

## Switch to designated branch

The default branch for the project is the **production** branch.
Switch to the production branch in git bash with

`git checkout production`

Here, you can branch out a part you want to work on.
For example if you want to add changes to the complete project

    git checkout -b <your branch name>
    git add .
    git commit -m <Your Commit Message>

If you want to work in the server directory

    git checkout -b <your branch name>
    git add -u
    git reset -- client/*
    git commit -m <Your Commit Message>

If you want to work in the client directory

    git checkout -b <your branch name>
    git add -u
    git reset -- server/*
    git commit -m <Your Commit Message>

## Install dependencies from the root directory

Open a Command Line Interface
Install the root directory dependencies with

    npm install

For **both** client and server side dependency installation,

    npm run all-install

For **only** client side dependencies installation,

    npm run client-install

For **only** server side dependencies installation,

    npm run server-install

## Starting the project from a localhost server

From the project's root directory, you can start both the server and client concurrently with

    npm run dev

You can choose to start only the client with

    npm run client

You can choose to start only the server with

    npm run server
