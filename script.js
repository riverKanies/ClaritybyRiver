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
                arrow.textContent = '▶';
                this.classList.remove('active');
            } else {
                content.style.display = 'block';
                arrow.textContent = '▼';
                this.classList.add('active');
            }
        });
    });
});

// Read more/less functionality for story sections on mobile
function toggleReadMore(button) {
    const section = button.closest('.story-section, .bio-section, .credentials-section');
    const isExpanded = section.classList.contains('expanded');
    
    if (isExpanded) {
        section.classList.remove('expanded');
        button.textContent = 'Read More';
    } else {
        section.classList.add('expanded');
        button.textContent = 'Read Less';
    }
    
    // For story section, also toggle the story-content element
    if (section.classList.contains('story-section')) {
        const storyContent = section.querySelector('.story-content');
        if (storyContent) {
            if (isExpanded) {
                storyContent.classList.remove('expanded');
            } else {
                storyContent.classList.add('expanded');
            }
        }
    }
    
    // For bio section, also toggle the bio-content element
    if (section.classList.contains('bio-section')) {
        const bioContent = section.querySelector('.bio-content');
        if (bioContent) {
            if (isExpanded) {
                bioContent.classList.remove('expanded');
            } else {
                bioContent.classList.add('expanded');
            }
        }
    }
    
    // For credentials section, also toggle the credentials-content element
    if (section.classList.contains('credentials-section')) {
        const credentialsContent = section.querySelector('.credentials-content');
        if (credentialsContent) {
            if (isExpanded) {
                credentialsContent.classList.remove('expanded');
            } else {
                credentialsContent.classList.add('expanded');
            }
        }
    }
}
