async function start () {
  return await Promise.resolve('async is working')
}

start().then(console.log)

class Util {
  static id = Date.now()
}

console.log('Util ID is ', Util.id)

// const unused = 42 - create unused var for test eslint

import('lodash').then( _ =>{
  console.log('Lodash', _.random(0,35, true))
})