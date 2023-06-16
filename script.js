const menu = [
  {
    id: 1,
    title: 'Beans',
    category: 'breakfast',
    img: './images/item1.jpg',
    price: 2500,
    desc: 'Beans are not only a great source of protein and fiber, but they also have a fascinating history. Did you know that beans have been cultivated for over 7,000 years and were one of the first crops to be domesticated by humans.',
  },
  {
    id: 2,
    title: 'Fufu',
    category: 'lunch',
    img: './images/item2.jpg',
    price: 800,
    desc: 'Fufu is a starchy, dough-like dish that is a staple food in many African countries. It is typically made by boiling starchy vegetables like cassava, yams, or plantains and then pounding them into a smooth, elastic dough.',
  },

  {
    id: 4,
    title: 'Popcorn',
    category: 'snacks',
    price: 1500,
    img: './images/item4.jpg',
    desc: 'Popcorn is a type of corn that has a hard outer shell and a soft, starchy inside. When heated, the moisture inside the kernel turns to steam and creates pressure, causing the kernel to explode and turn inside out.',
  },
  {
    id: 3,
    title: 'French Fries',
    category: 'lunch',
    price: 4000,
    img: './images/item3.jpg',
    desc: 'French fries, also known as chips or finger chips, actually originated in Belgium, not France. They were first introduced in the late 17th century and were originally fried fish, but when the river froze over in the winter, people started frying potatoes instead.',
  },
  {
    id: 6,
    title: 'Jollof Rice',
    category: 'breakfast',
    price: 3500,
    img: './images/item6.jpg',
    desc: 'Jollof rice is a popular West African dish that is made with rice, tomatoes, onions, and a variety of spices. Jollof rice is often served at weddings, parties, and other special occasions, and there is even an ongoing debate over which country makes the best version of the dish.',
  },
  {
    id: 5,
    title: 'Hamburger',
    category: 'snacks',
    price: 7000,
    img: './images/item5.jpg',
    desc: 'The hamburger, which is a sandwich consisting of a cooked patty of ground meat usually placed inside a sliced bread roll, is a popular food item that originated in the United States. ',
  },

  {
    id: 7,
    title: 'White Rice',
    category: 'breakfast',
    price: 3000,
    img: './images/item7.jpg',
    desc: 'White rice and stew is a popular dish in many cultures around the world. The dish typically consists of white rice, which is boiled or steamed, and a stew made with meat, vegetables, and spices.',
  },
  {
    id: 8,
    title: 'Pasta',
    category: 'lunch',
    price: 2500,
    img: './images/item9.jpg',
    desc: 'Pasta is a staple food in Italian cuisine and is enjoyed all over the world. It is made from a mixture of flour, eggs, and water, and can be shaped into a variety of different forms, including spaghetti, penne, and lasagna.',
  },
  {
    id: 9,
    title: 'Pizza',
    category: 'snacks',
    price: 5000,
    img: './images/item10.jpg',
    desc: 'Pizza is a popular food that originated in Italy but has since become a staple food in many countries around the world. It typically consists of dough that is topped with tomato sauce, cheese, and a variety of other ingredients, such as meats, vegetables, and spices. ',
  },
  {
    id: 10,
    title: 'Mac and Cheese',
    category: 'dinner',
    price: 5000,
    img: './images/item8.jpg',
    desc: 'Mac and Chese is a popular comfort food that is enjoyed all ove rthe world. It typically consists of macaroni pasta that is cooked and then mixed with a cheese sauce made from butter,milk, and grated cheese.',
  },
]

const menuContainer = document.querySelector('.menu-container')
const btnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', () => {
  displayItems(menu)
  const newCategory = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category)
      }
      return value
    },
    ['all']
  )
  const btnCatergories = newCategory
    .map((item) => {
      return `<button class="filter-btn" type="button" data-id="${item}">${item}</button>`
    })
    .join('')
  btnContainer.innerHTML = btnCatergories
  const filterBtns = document.querySelectorAll('.filter-btn')
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter((item) => {
        console.log(item.category)
        if (item.category === category) {
          return item
        }
      })
      //console.log(menuCategory)
      if (category === 'all') {
        displayItems(menu)
      } else {
        displayItems(menuCategory)
      }
      if (category === 'breakfast') {
        displayItems(menuCategory)
      }
    })
  })
})

function displayItems(menuItems) {
  let displaymenu = menuItems
    .map((item) => {
      return `<main class="menu-item">
          <img src=${item.img} alt="" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price"><i class="fa-solid fa-naira-sign"></i>${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </main`
    })
    .join('')
  menuContainer.innerHTML = displaymenu
}
