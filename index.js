const colorInput = document.getElementById('color-picker')
const mode = document.getElementById('select-mode')
const rangeSlider = document.getElementById('range-slider')
    
    
/* Updating number of selected colors */
function updateTextInput() {
    document.getElementById('text-output').innerHTML = rangeSlider.value
}
    

document.getElementById('get-scheme-btn').addEventListener('click', function(){

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${mode.value}&count=${rangeSlider.value}`)
    .then(res => res.json())
    .then(data => {   
        let colorsHtml = ''
        const colorHtmlArr = data.colors.map(function(color){
            colorsHtml += `
            <div class="color-container">
                <div class="color-display" style="background-color: ${color.hex.value}"></div>
                <p class="color-id">${color.hex.value}</p>
            </div>
            `
        }).join("")
        document.getElementById('color-body').innerHTML = colorsHtml
    })
})