document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            "image": "",
            "title": "Website",
            "description": "A brief description of project 1."
        },
        {
            "image": "images/project2.png",
            "title": "Application",
            "description": "A brief description of project 2."
        },
        {
            "image": "images/project3.png",
            "title": "Data Analis",
            "description": "A brief description of project 3."
        }
    ];

    const projectGrid = document.getElementById('project-grid');

    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectImg = document.createElement('img');
        projectImg.src = project.image;
        projectImg.alt = project.title;

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectDiv.appendChild(projectImg);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);

        projectGrid.appendChild(projectDiv);

        // Delay the animation for each project
        setTimeout(() => {
            projectDiv.classList.add('show');
        }, index * 200);
    });
});
