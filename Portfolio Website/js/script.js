document.addEventListener("DOMContentLoaded", () => {
    //language icons
    const icon_container = document.getElementById("tech-skills-items");
    const language_icons = [
        {name: "html", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "html icon"},
        {name: "javascript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "javascript icon"},
        {name: "java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "java icon"},
        {name: "python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "python icon"},
        {name: "sql", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", alt: "sql icon"},
        {name: "css", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "css icon"},
        {name: "react", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "react icon"},
        {name: "node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "node icon"},
        {name: "express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", alt: "express icon"},
        {name: "bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", alt: "bootstrap icon"},
        {name: "postgresql", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "postgresql icon"},
        {name: "github", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "github icon"},
        {name: "vs code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", alt: "vs code icon"},
        {name: "docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", alt: "docker icon"}
    ];

    //language icons divs
    language_icons.forEach(language_icon => {
        const item = document.createElement("div");
        item.className = "tech-skills-item";

        if(language_icon.name === 'express' || language_icon.name === 'github') {
            item.innerHTML = 
            `
                <img src="${language_icon.src}" alt="${language_icon.alt}" style="background-color: white; padding: 2px; border-radius: 5px;"/>
                <span>${language_icon.name}</span>
            `;
        }
        else {
            item.innerHTML = 
            `
                <img src="${language_icon.src}" alt="${language_icon.alt}"/>
                <span>${language_icon.name}</span>
            `;
        }

        icon_container.appendChild(item);
    });

    //education
    const education = [
        {icon: "fas fa-graduation-cap", organisation: "Thuto-Lesedi Seondary School", year: "2021", qualification: "Matric", content: ""},
        {icon: "fas fa-laptop", organisation: "Johannesburg Business School", year: "2023", qualification: "Coding With Python", content: "A three-month traininng and mentoring programme in problem solving, algorithms and introductory programming with python."},
        {icon: "fas fa-graduation-cap", organisation: "Univeristy of Johannesburg", year: "2023-2025", qualification: "BSc in Information Technology", 
            content: `<strong>Final Year Project: Sport Sync</strong> 
                    <br> A web- and app-based sports facility management system that streamlines facility bookings, staff administration and reporting processes. 
                    <br> <strong>Tech Stack:</strong> React, React Native, Node.js + Express, PostgreSQL
                    <br> <strong>Tools:</strong> VS Code, GitHub, pgAdmin, Docker, Expo Go, Figma`
        },
        {icon: "fas fa-laptop", organisation: "Coursera", year: "2025", qualification: "Trouble Shooting And Debugging Techniques", content: "An online, self-paced course teaching skills to identify, analyze and fix software issues."},
        {icon: "fas fa-award", organisation: "243ProNetwork", year: "2025", qualification: "Empower Mentorship Programme", content: "A six-month, one-to-one professional mentorship programme offering career guidance, industry insights and networking opportunities."}
    ];
    const edu_prof_container = document.getElementById("education-profession");

    education.forEach(edu => {
        const item = document.createElement("div");
        item.className = "edu-prof-item";

        item.innerHTML = `
            <div class="edu-prof-icon">
                <i class="${edu.icon}"></i>
                <span>${edu.year}</span>
            </div>
            <h3 class="qualification">${edu.qualification}</h3>
            <h5 class="organization">${edu.organisation.toUpperCase()}</h5>
            <div class="edu-content">
                <span>${edu.content}</span>
            </div>
        `;

        edu_prof_container.appendChild(item);
    });
    

    //projects
    const projects = [
        {live_demo: "#", github_link: "#", proj_img: "images/Chekina-Muteka.jpg", proj_name: "My portfolio", description: "A responsive personal portfolio showcasing web development skills with modern design and interactive elements.", tools_technologies: ["HTML", "CSS", "JS", "VS Code", "GitHub"]}
    ];

    const projects_container_item = document.getElementById("projects-container-item");

    projects.forEach(project => {
        const item = document.createElement("div");
        item.className = "projects-card";

        item.innerHTML = `
            <img src="${project.proj_img}" alt="proj-Image">
            <span class="title">${project.proj_name}</span>
            <p class="description">${project.description}</p>
            <div class="proj-tech">
                <strong>Tools and Technologies:</strong>
                <ul>
                    ${project.tools_technologies.map(tool_tech => 
                        `<li>${tool_tech}</li>`).join('')
                    }
                </ul>
            </div>
            <div class="proj-links">
                <a href="${project.live_demo}" target="_blank" class="btn">
                    <i class="fas fa-globe"></i>
                </a>
                <a href="${project.github_link}" target="_blank" class="btn btn-outline">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        `;
        projects_container_item.appendChild(item);
    });
});