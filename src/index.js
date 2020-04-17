import Post from './post'
import './styles/style.css'
import json from './assets/file1.json'
import Smile from './assets/smile.png'

const post = new Post('Post title 1', Smile)

console.log(post.toString())

console.log('JSON-file:', json)