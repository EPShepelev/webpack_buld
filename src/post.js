export default class Post {
  constructor(title, img){
    this.title = title
    this.date = new Date()
    this.image = img
  }
  toString(){
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      image: this.image
    })
  }
  get uppercaseTitle() {
    return this.title.toUpperCase()
  }
}