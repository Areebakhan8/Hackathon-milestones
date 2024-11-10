const toggle = document.getElementById('button') as HTMLButtonElement
const skill = document.getElementById('skills') as HTMLElement

toggle.addEventListener('click',()=>{
    if(skill.style.display === 'none'){
        skill.style.display = 'block'
    }else{
        skill.style.display = 'none'
    }
});