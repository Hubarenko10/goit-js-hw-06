const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const ulEl=document.querySelector('.gallery')
// const galleryImg = images.map(image => {
//   ulEl.insertAdjacentHTML(
//     'beforeend',
//     `<li><img src = "${image.url}" alt = "${image.alt}"  width = "300" height = "200" /></li>`,
//   ulEl.style.cssText = `
// display: grid;
// list-style:none;  
// grid-template-columns: repeat(3, 1fr);
// `);
// })

const ulEl=document.querySelector('.gallery')
const galleryImg = images.map(image => { 
return `<li><img src = "${image.url}" alt = "${image.alt}"  width = "300" height = "200" /></li>`
})
ulEl.insertAdjacentHTML('beforeend', galleryImg,ulEl.style.cssText = `
display: flex;
list-style:none;  
grid-template-columns: repeat(3, 1fr);
`).join("");
