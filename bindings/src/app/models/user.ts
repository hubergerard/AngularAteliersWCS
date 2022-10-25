export class User {
  name: string;
  age?: number;
  imgUrl?: string;
  quote: string;

  constructor(name: string, quote: string, age?: number, imgUrl?: string) {
    this.name = name;
    this.age = age;
    this.imgUrl = imgUrl;
    this.quote = quote;
  }

  printUser() {
    console.log(this.name);
  }
}
