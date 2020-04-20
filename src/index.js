import Post from './post'
import './styles/style.css'
import json from './assets/file1.json'
import Smile from './assets/smile.png'
import xml from './assets/file2.xml'
import csv from './assets/file3.csv'

const post = new Post('Post title 1', Smile)

console.log(post.toString())

console.log('JSON-file:', json)
console.log('XML-file:', xml)
console.log('CSV-file:', csv)