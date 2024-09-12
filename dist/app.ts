const toggleButton = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection= document.getElementById('Skills') as HTMLElement;
    

function ToggleSkills(): void {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';}
     else {
        skillsSection.style.display = 'none';
    }
}

toggleButton.addEventListener('click', toggleSkills);tsc AudioParamMap.toString