const container = document.getElementById('container')
const colors = ['#F07857', '#43A5BE', '#5C62D6', '#BF2C34', '#D49137', '#BE398D', '#F53BDA5', '#CBD6E2', '#FO7857', '#4FBO6D', '#EBB8DD', '#F07857']
const Squares = 500

for (let i = 0; i < Squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}