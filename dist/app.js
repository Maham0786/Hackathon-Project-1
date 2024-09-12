"use strict";
const toggleButton = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('Skills');
function toggleSkills() {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
}
toggleButton.addEventListener('click', toggleSkills);
