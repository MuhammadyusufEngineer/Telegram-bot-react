export function getData() {
  return [
    {
<<<<<<< HEAD
      category: 'water',
      img: '/category-water.png',
      products: [
        { id: 1, img: '/19lWater.jpg', title: '1L Suv', description: '1 litrli shisha suv', price: 1.0, category: 'water' },
        { id: 2, img: '/19lWater.jpg', title: '1.5L Suv', description: '1.5 litrli shisha suv', price: 1.5, category: 'water' },
        { id: 3, img: '/19lWater.jpg', title: '5L Suv', description: '5 litrli shisha suv', price: 4.0, category: 'water' },
        { id: 4, img: '/19lWater.jpg', title: '10L Suv', description: '10 litrli shisha suv', price: 7.0, category: 'water' },
        { id: 5, img: '/19lWater.jpg', title: '19L Suv', description: '19 litrli shisha suv', price: 12.0, category: 'water' }
      ],
    },
    {
      category: 'coffee',
      img: '/category-coffee.png',
      products: [
        { id: 6, img: '/coffee.jpg', title: 'Yer qahva', description: '100% Arabica yer qahva', price: 5.0, category: 'coffee' },
        { id: 7, img: '/coffee.jpg', title: 'Instant qahva', description: 'Premium instant qahva', price: 3.5, category: 'coffee' },
        { id: 8, img: '/coffee.jpg', title: 'Qahva donalari', description: 'Butun qahva donalari', price: 6.0, category: 'coffee' }
      ],
    },
    {
      category: 'tea',
      img: '/category-tea.png',
      products: [
        { id: 9, img: '/tea.jpg', title: 'Qora choy', description: 'Premium qora choy', price: 3.0, category: 'tea' },
        { id: 10, img: '/tea.jpg', title: 'Yashil choy', description: 'Organik yashil choy', price: 3.5, category: 'tea' },
        { id: 11, img: '/tea.jpg', title: 'O\'t choyi', description: 'Aralash o\'t choyi', price: 4.0, category: 'tea' }
      ]
    },
    {
      category: 'oil',
      img: '/category-oil.png',
      products: [
        { id: 12, img: '/oil.jpg', title: 'Zaytun moyi', description: 'Extra virgin zaytun moyi', price: 10.0, category: 'oil' },
        { id: 13, img: '/oil.jpg', title: 'Kanola moyi', description: 'Sof kanola moyi', price: 8.0, category: 'oil' },
        { id: 14, img: '/oil.jpg', title: 'Hindiston yong\'og\'i moyi', description: 'Organik hindiston yong\'og\'i moyi', price: 9.0, category: 'oil' }
      ]
    },
    {
      category: 'chocolate',
      img: '/category-chocolate.png',
      products: [
        { id: 15, img: '/choco-bar.jpg', title: 'Sutli shokolad', description: '70% kakao qorong\'i shokolad', price: 2.0, category: 'chocolate' },
        { id: 16, img: '/choco-feastables.webp', title: 'Feastables MrBeast', description: 'Silliq sutli shokolad', price: 1.5, category: 'chocolate' },
        { id: 17, img: '/choco.webp', title: 'Oq shokolad', description: 'Kremli oq shokolad', price: 2.5, category: 'chocolate' }
      ]
    },
    {
      category: 'milk',
      img: '/category-water.milk',
      products: [
        { id: 18, img: '/mlk.jpg', title: 'Butun sut', description: '1 gallon butun sut', price: 1.2, category: 'milk' },
        { id: 19, img: '/milk.avif', title: 'Yengil sut', description: '1 gallon yengil sut', price: 1.0, category: 'milk' },
        { id: 20, img: '/sutim.jpg', title: 'Bodom sut', description: '1 litr bodom sut', price: 2.5, category: 'milk' }
      ]
    },
    {
      category: 'drinks',
      img: '/category-drinks.png',
      products: [
        { id: 21, img: '/maccoffee.jpg', title: 'Apelsin sharbati', description: '100% apelsin sharbati', price: 2.5, category: 'non-alcoholic drinks' },
        { id: 22, img: '/mojito.jpg', title: 'Olma sharbati', description: '100% olma sharbati', price: 2.0, category: 'non-alcoholic drinks' },
        { id: 23, img: '/milliy-cola.jpg', title: 'Soda', description: 'Gazlangan soda', price: 1.0, category: 'non-alcoholic drinks' }
      ]
    },
    {
      category: 'noodles',
      img: '/category-noodles.png',
      products: [
        { id: 24, img: '/hotlunch.png', title: 'Tovuqli noodle', description: 'Instant tovuqli noodle', price: 0.5, category: 'fast noodles' },
        { id: 25, img: '/hotlunch.png', title: 'Mol go\'shtli noodle', description: 'Instant mol go\'shtli noodle', price: 0.5, category: 'fast noodles' },
        { id: 26, img: '/hotlunch.png', title: 'Sabzavotli noodle', description: 'Instant sabzavotli noodle', price: 0.5, category: 'fast noodles' }
      ]
    },
    {
      category: 'bathroom',
      img: '/category-bathroom.png',
      products: [
        { id: 27, img: '/shampoo.jpg', title: 'Shampun', description: 'Soch shampuni', price: 3.5, category: 'bathroom products' },
        { id: 28, img: '/duru.jpg', title: 'Konditsioner', description: 'Soch konditsioneri', price: 3.5, category: 'bathroom products' },
        { id: 29, img: '/duru-shampoo.jpg', title: 'Tana yuvish vositasi', description: 'Suyuq tana yuvish vositasi', price: 4.0, category: 'bathroom products' }
      ]
    },
    {
      category: 'sanitary',
      img: '/category-sanitary.png',
      products: [
        { id: 30, img: '/pads.jpg', title: 'Sanitar padlar', description: 'Sanitar padlar', price: 4.0, category: 'sanitary products' },
        { id: 31, img: '/prima.jpg', title: 'Prima taglik', description: 'Organik shampunlar', price: 5.0, category: 'sanitary products' },
        { id: 32, img: '/soch-yog.webp', title: "Soch yog'i", description: "Bibariya o'simligidan tayyorlangan tabiiy sochlar uchun moy. Soch vashshe uzun bo'p ketadi, Rapunzel ham hijolat", price: 3.0, category: 'sanitary products' }
      ]
    }
=======
      id: 1,
      title: 'Javascript',
      price: 191,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.worldnomads.com%2Ftravel-safety%2Feurope%2Fswitzerland%2Fmountain-safety-switzerland&psig=AOvVaw3Vxi6eskbYrg_J8RMDbQsy&ust=1718024136300000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCJm-XIzoYDFQAAAAAdAAAAABAE'
    },
    {
      id: 2,
      title: 'Typescript',
      price: 123,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.totaltypescript.com%2F&psig=AOvVaw1GiTMJ1_Y10L6-tTw_gJ2B&ust=1718024230388000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIixs5HJzoYDFQAAAAAdAAAAABAE'
    },
    {
      id: 3,
      title: 'Vue.js',
      price: 987,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplainenglish.io%2Fblog%2Fvue-js-vapor-mode-and-other-roadmap-updates-from-vue-amsterdam-2023&psig=AOvVaw3JIhX7L5JoJrkmVWx6dkQE&ust=1718024274470000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPC6jqvJzoYDFQAAAAAdAAAAABAE'
    },
    {
      id: 4,
      title: 'Nuxt.js',
      price: 684,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKHF4JdcF4JA&psig=AOvVaw2JJ4Zzxl5Wao35sT6ka5eq&ust=1718024331746000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOD5l8LJzoYDFQAAAAAdAAAAABAS'
    },
    {
      id: 5,
      title: 'Node.js',
      price: 968,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdevelopers.redhat.com%2Fblog%2F2021%2F02%2F10%2Fadd-standardized-support-information-to-your-node-js-modules&psig=AOvVaw3IRufHlB2sU8FoE5IhKgIn&ust=1718024388881000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCgg93JzoYDFQAAAAAdAAAAABAb'
    },
>>>>>>> 377ebb3babdc8dbf777847f792b2d93834a1a1ef
  ]
}