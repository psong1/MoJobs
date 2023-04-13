fetch('jobssearch.json')
.then(response => response.json())
.then(data => {
    const jobs = data; // putting JSON data in a variable
    //code to handle the JSON data 
    jobs.forEach(job => {
        const section = document.createElement('section');
        section.classList.add('card');

        const header = document.createElement('header');
        header.textContent = job.title;
        section.appendChild(header);

        const image = document.createElement('img');
        image.src = job.image;
        section.appendChild(image);

        const location = document.createElement('p');
        location.textContent = job.location;
        section.appendChild(location);

        const salary = document.createElement('p');
        salary.textContent = job.salary;
        section.appendChild(salary);

        const description = document.createElement('p');
        description.textContent = job.description;
        section.appendChild(description);

        const type = document.createElement('p');
        type.textContent = job.type;
        section.appendChild

        const company = document.createElement('p');
        company.textContent = job.company;
        section.appendChild(company);

        const link = document.createElement('a');
        link.href = job.website;
        link.setAttribute('target', 'blank');
        link.textContent = "Apply Now!";
        section.appendChild(link);

        const jobsContainer = document.getElementById('jobs-container');
        jobsContainer.appendChild(section);
    })
    console.log(data);
})
.catch(error => {
    console.error('Error fetching or parsing job data:', error);
});