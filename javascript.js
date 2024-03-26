// const moveButton = document.querySelector('button')
// moveButton.addEventListener('click', moveCircle)

function convertPosToYear(xPos) {
    const startDiv = document.getElementById('starting-year')
    let start = Math.round(startDiv.getBoundingClientRect().x)
    let startVal = startDiv.textContent

    const endDiv = document.getElementById('ending-year')
    let end = Math.round(endDiv.getBoundingClientRect().x)
    let endVal = endDiv.textContent

    let range = endVal - startVal

    percentage = (xPos - start) / (end - start)

    if (percentage >= 0) {
        return (Math.round(percentage * range) + "AD")
    } else {
        return (Math.round(percentage * range) + "BC")
    }
    
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
    ref.classList.remove('clicked')
    console.log('stopped');
}

handleMouseClick = (event) => {
    const ref = document.getElementById('circle');
    ref.classList.add('clicked');

    const input = document.querySelector('input') 
    const inputText = input.value

    const newBox = document.createElement('div')
    newBox.classList.add('marker')
    
    const boxHeader = document.createElement('h1')
    boxHeader.textContent = convertPosToYear(event.clientX)
    newBox.appendChild(boxHeader)

    const boxIcon = document.createElement('img')
    boxIcon.src = 'x.svg'
    newBox.appendChild(boxIcon)

    const boxDetail = document.createElement('p')
    boxDetail.textContent = input.value
    newBox.appendChild(boxDetail)

    const container = document.getElementById('line');
    newBox.style.position = 'absolute';
    newBox.style.left = event.clientX + 'px';
    container.appendChild(newBox)

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

document.addEventListener('mousedown', handleMouseClick)

const deleteButton = document.get
