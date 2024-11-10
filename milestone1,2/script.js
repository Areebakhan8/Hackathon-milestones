var toggle = document.getElementById('button');
var skill = document.getElementById('skills');
toggle.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
