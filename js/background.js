const images = [
  '신비배경 1.jpg',
  '신비배경 2.jpg',
  '신비배경 3.jpg',
  '신비배경 4.jpg',
  '신비배경 5.jpg',
  '신비배경 6.jpg',
  '신비배경 7.jpg',
  '신비배경 8.jpg',
  '신비배경 9.jpg',
  '신비배경 10.jpg',
  '신비배경 11.jpg',
  '신비배경 12.jpg',
  '신비배경 13.jpg',
  '신비배경 14.jpg',
  '신비배경 15.jpg',
]

const chooseImage = images[Math.floor(Math.random() * images.length)]

const backgroundImage = document.createElement('img')

backgroundImage.src = `img/${chooseImage}`

document.body.appendChild(backgroundImage)
