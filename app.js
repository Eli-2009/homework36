let car1 = document.createElement('img')
car1.src = 'https://d.newsweek.com/en/full/2442045/2024-hyundai-elantra.jpg?w=1200&f=10cce27f9fa3fd8afad08631a15b8aa2'
car1.style.width = '430px'
car1.style.height = '300px'
car1.style.display = 'none'
document.body.appendChild(car1)


let car2 = document.createElement('img')
car2.src = 'https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?cs=srgb&dl=pexels-mikebirdy-100650.jpg&fm=jpg'
car2.style.width = '430px'
car2.style.height = '250px'
car2.style.display = 'none'
document.body.appendChild(car2)



let food = document.createElement('img')
food.src = 'https://bakerpedia.com/wp-content/uploads/2020/03/Egg_baking-ingredients-e1584136402126.jpg'
// food.style.width = '530px'
food.style.height = '250px'
food.style.display = 'none'
document.body.appendChild(food)



let landscape = document.createElement('img')
landscape.src = 'https://images.photowall.com/products/42556/summer-landscape-with-river.jpg?h=699&q=85'
// landscape.style.width = '530px'
landscape.style.height = '250px'
landscape.style.display = 'none'
document.body.appendChild(landscape)



let cars = document.querySelector('.car');
cars.addEventListener('click', ()=>{
car1.style.display = 'block'
car2.style.display = 'block'
food.style.display = 'none'
landscape.style.display = 'none'
})

let food2 = document.querySelector('.food');
food2.addEventListener('click', ()=>{
car1.style.display = 'none'
car2.style.display = 'none'
food.style.display = 'block'
landscape.style.display = 'none'
})



let landscape1 = document.querySelector('.landscape');
landscape1.addEventListener('click', ()=>{
car1.style.display = 'none'
car2.style.display = 'none'
food.style.display = 'none'
landscape.style.display = 'block'
})

let all = document.querySelector('.all');
all.addEventListener('click', ()=>{
car1.style.display = 'block'
car2.style.display = 'block'
food.style.display = 'block'
landscape.style.display = 'block'
})