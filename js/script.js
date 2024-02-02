const clock = document.querySelector('#clock h2')

function getClock() {
  const date = new Date()

  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ]

  const year = String(date.getFullYear()).padStart(4, '0') // 연도
  const month = String(date.getMonth() + 1).padStart(2, '0') // 월
  const dateNumber = String(date.getDate()).padStart(2, '0')
  const dayNumber = String(date.getDay()) // 요일 숫자
  const day = days[dayNumber] // 요일 값으로
  const hours = String(date.getHours()).padStart(2, '0') // 시간
  const minutes = String(date.getMinutes()).padStart(2, '0') // 분
  const seconds = String(date.getSeconds()).padStart(2, '0') // 초

  clock.innerText = `${year}년 ${month}월 ${dateNumber}일 ${day} ${hours}시 ${minutes}분 ${seconds}초`
}

getClock()
setInterval(getClock, 1000)
