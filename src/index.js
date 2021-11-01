import Post from './Post';
import '@styles/style.css';
import json from '@assets/json'
import webpackLogo from '@assets/webpack-logo.png';
import xml from '@assets/data.xml'
import csv_ from '@assets/data.csv'

import * as $ from 'jquery'

const post = new Post("Webpack post title", webpackLogo);

$('.postInfo').html(post.toString())
$('.csvInfo').html(csv_.toString())

console.log('JSON: ', json)
console.log('XML: ', xml)
console.log('CSV: ', csv_)