const url=require('url')

const myurl=new URL('https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=687s')

console.log(myurl.host);
console.log(myurl.search);
console.log(myurl.searchParams);
