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

document.body.style.backgroundImage = `url(${backgroundImage.src})`
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundRepeat = 'no-repeat'
// 배경 반복여부 설정
document.body.style.backgroundPosition = 'center;'
// 레이어 기준 위치 설정

const overlayDiv = document.createElement('div')

overlayDiv.style.position = 'fixed'
overlayDiv.style.top = '0'
overlayDiv.style.left = '0'
overlayDiv.style.width = '100%'
overlayDiv.style.height = '100%'
overlayDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.2)' // Adjust the opacity as needed

document.body.appendChild(overlayDiv)
