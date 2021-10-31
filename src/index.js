import Post from './Post';
import './styles/style.css';
import json from './assets/json.json'
import webpackLogo from './assets/webpack-logo.png';

const post = new Post("Webpack post title", webpackLogo);

console.log('Post to string: ', post.toString());

console.log('JSON',json)