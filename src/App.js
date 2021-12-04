// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Post from './Post';
import PostsDisplay from './PostsDisplay'
import CreatePost from './CreatePost' 

//configure airtable:

const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,

};

const base = new Airtable({apiKey: airtableConfig.apiKey})
  .base(airtableConfig.baseKey);


function App() {
  return (
    <>
    <h1>Posts: </h1>
    < PostsDisplay/>
    <br></br>

    <h1>Create your own post: </h1>
    < CreatePost/>
    </>
  );
}

export default App;
