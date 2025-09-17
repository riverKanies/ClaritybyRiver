// Dropdown functionality for pain points
document.addEventListener('DOMContentLoaded', function() {
    const painPointToggles = document.querySelectorAll('.pain-point-toggle');
    
    painPointToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            
            // Toggle the content visibility
            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.textContent = '▼';
                this.classList.remove('active');
            } else {
                content.style.display = 'block';
                arrow.textContent = '▲';
                this.classList.add('active');
            }
        });
    });
});
