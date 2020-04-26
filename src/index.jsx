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
import React from 'react'
import {render} from 'react-dom'

const post = new Post('Post title 1', Smile)

// $('pre').html(post.toString())

// console.log(post.toString())

console.log('JSON-file:', json)
console.log('XML-file:', xml)
console.log('CSV-file:', csv)

const App = () => (<div className='container'>
  <h1>Easy webpack build for training</h1>
  <hr/>
  <div className='logo'></div>
  <hr/>
  <pre/>
  <hr/>
  <div className='box'>
  <h2>Styles set with less</h2>
  </div>
  <hr/>
  <div className='card'>
  <h2>Styles set with sass</h2>
  </div>
  </div>
  )

render(<App/>, document.getElementById('app'))