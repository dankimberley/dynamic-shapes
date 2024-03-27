// const moveButton = document.querySelector('button')
// moveButton.addEventListener('click', moveCircle)

const markers = []

function checkDirection(xPos) {
    let conflicts = 0
    markers.forEach((marker) => {
        if(Math.abs(marker.getBoundingClientRect().x - xPos) < 100 ) {
            console.log(`True: ${Math.abs(marker.getBoundingClientRect().x - xPos)}`)
            conflicts ++
        }
    })
    return (conflicts >= 1)
}

function convertPosToYear(xPos) {
    const startDiv = document.getElementById('starting-year')
    let start = Math.round(startDiv.getBoundingClientRect().x)
    let startVal = startDiv.textContent

    const endDiv = document.getElementById('ending-year')
    let end = Math.round(endDiv.getBoundingClientRect().x)
    let endVal = endDiv.textContent

    let range = endVal - startVal

    percentage = (xPos - start) / (end - start)

    let result = Math.round((percentage * range) + Number(startVal))

    return result
    
}


handleMouseMove = (event) => {
    const x = event.clientX;

    const ref = document.getElementById('circle');
    ref.style.position = 'absolute'
    ref.style.left = x + 'px';
    ref.classList.add('moving');
};

handleMouseStop = (event) => {
    console.log('mousestop');
    const ref = document.getElementById('circle');
    ref.classList.remove('moving');
    ref.classList.remove('clicked');
}

handleMouseClick = (event) => {
    const ref = document.getElementById('circle');
    ref.classList.add('clicked');
    xPos = event.clientX
    let flip = checkDirection(xPos)
    console.log(checkDirection(xPos))

    const input = document.querySelector('input') 
    const inputText = input.value
    input.value = ''
    console.log(inputText) 

    const newBox = document.createElement('div')
    if (flip == false) {
        newBox.classList.add('marker')
    } else {
        newBox.classList.add('marker')
        newBox.classList.add('marker-flipped')
    }
    
    
    const boxHeader = document.createElement('h1')
    boxHeader.textContent = convertPosToYear(xPos)
    newBox.appendChild(boxHeader)

    const boxIcon = document.createElement('img')
    boxIcon.src = 'x.svg'
    boxIcon.addEventListener('click', () => {
        boxIcon.parentNode.remove()
        })
    newBox.appendChild(boxIcon)

    const boxDetail = document.createElement('p')
    boxDetail.textContent = inputText
    newBox.appendChild(boxDetail)

    const container = document.getElementById('line');
    newBox.style.position = 'absolute';
    newBox.style.left = xPos + 'px';
    container.appendChild(newBox)

    markers.push(newBox)

}

let timer

window.addEventListener("mousemove",function(){
    clearTimeout(timer);
    timer=setTimeout(handleMouseStop,100);
});

let timer2

window.addEventListener("mousedown",function(){
    clearTimeout(timer2);
    timer2=setTimeout(handleMouseStop,100);
});

document.addEventListener('mousemove', handleMouseMove);

document.addEventListener('mousedown', (e) => {
    if((e.target !== e.currentTarget && e.target == document.querySelector('body')) || e.target == document.getElementById('circle')) {
        handleMouseClick(e)
        console.log(e.target)
    }
})

const deleteButton = document.get

function pdf() {
    console.log('Saving...')
    const element = document.querySelector('body')
    let opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 0.5 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
      };
      html2pdf(element, opt)
}