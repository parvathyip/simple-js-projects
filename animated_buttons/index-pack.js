const buttons= document.getElementsByTagName('button')
for(const button of buttons){
    button.addEventListener('click',shake)
}
function shake(e){
    e.target.classList.toggle('shake')
}