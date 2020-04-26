import * as $ from 'jquery'
import Post from '@models/post'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'
import json from './assets/file1.json'
import Smile from '@/assets/smile.png'
import xml from './assets/file2.xml'
import csv from './assets/file3.csv'
import './babel.js'

const post = new Post('Post title 1', Smile)

$('pre').html(post.toString())

console.log(post.toString())

console.log('JSON-file:', json)
console.log('XML-file:', xml)
console.log('CSV-file:', csv)