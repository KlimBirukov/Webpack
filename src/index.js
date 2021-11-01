import Post from './Post';
import '@styles/style.css';
import json from '@assets/json'
import webpackLogo from '@assets/webpack-logo.png';
import xml from '@assets/data.xml'
import csv from '@assets/data.csv'

const post = new Post("Webpack post title", webpackLogo);

console.log('Post to string: ', post.toString());

console.log('JSON: ', json)
console.log('XML: ', xml)
console.log('CSV: ', csv)