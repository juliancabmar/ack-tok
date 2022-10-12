# Ack-Tok (Video sharing App)
## Overview:

This project is a video sharing site inspired by tik-tok, instagram and others. Any visitor with a google account can sign in thanks to the react-oauth/google module. Once logged in, they can upload his own videos, like and comment on videos uploaded by other users as well.

![ack-tok_A](https://user-images.githubusercontent.com/85290842/195296848-f3a37d68-a07e-4cd8-9e1d-fe675055f93b.png)

## Run online:
https://ack-tok.vercel.app/

## Project Description:
#### Frontend and Routing:
  I use Next.js because it seemed easier to structure and also take advantage of its simplification in routing... And I also wanted to learn more about Next.js obviously ;) 
#### Database CRUD:
I chose Sanity for be an excellent solution both as a data and multimedia server, and knowing Graph-ql queries previously, Sanity's GROQ (Graph-Relational Object Queries) became quite familiar to me.
#### Deploy on Vercel:
I try various servers, but for Next.js apps this was my prefered.

## How install and run:
First clone the repo and cd on it:
```bash
$ git clone https://github.com/juliancabmar/ack-tok
$ cd ./ack-tech
```
Install the dependencies:
```bash
$ npm install --legacy-peer-deps #(for avoid dependency issues)
```
Run the app:
```bash

$ npm run dev
```
Finally open [http://localhost:3000](http://localhost:3000) in your browser.
