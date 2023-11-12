window.addEventListener('scroll', function () {
    // Get all elements with the class 'skill'
    var skills = document.querySelectorAll('.skill');

    // Loop through each skill element
    skills.forEach(function (skill) {
        // Get the skill level from the 'data-skill' attribute
        var skillLevel = skill.getAttribute('data-skill');

        // Calculate the width of the skill bar based on the scroll position
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var skillPosition = skill.offsetTop;

        if (scrollPosition > skillPosition - windowHeight + 100) {
            skill.style.width = skillLevel + '%';
        }
    });
});