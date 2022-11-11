const canvas = document.querySelector('#canvas')
const container = document.querySelector('#container')
const color = document.querySelector('#color')
const resetButton = document.querySelector('.btn')
const pixelSize = document.querySelector('.pixelSize')
const toggleButton = document.querySelector('.toggle')

let size = pixelSize.value


function createCanvas(size) {
    canvas.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div')
        div.classList.add('pixel')
        
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = color.value
        })

        canvas.appendChild(div)
    }
}

function resetCanvas() {
    canvas.textContent = ""
    createCanvas(size)
}

resetButton.addEventListener('click', () => {
    resetCanvas()
})

pixelSize.addEventListener('click', () => {
    size = pixelSize.value
    resetCanvas()
})


createCanvas(size)







