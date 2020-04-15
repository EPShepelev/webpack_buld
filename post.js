class Post {
  constructor(title){
    this.title = title
    this.date = new Data()
  }
  toString(){
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON()
    })
  }
}