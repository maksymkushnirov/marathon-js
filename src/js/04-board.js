const board = document.querySelector('#board')
const SQUARES_NUMBER = 800;
const colors = ['#AC0D38', '#CD9816', '#E9DECB', '#CBA0BC','#3D9998', '#0E356B']

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement ('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 4px ${color}, 0 0 14px ${color}`
}

function removeColor (element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
};

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
};