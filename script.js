//SERVICES GRID
let servicesContent = "";
arrMainInfo.forEach((service, index) => {
  servicesContent += `
    <div class="grid-card">
      <img src="${service.img}" alt="service_${index}">
      <div class="service-name">
        <h3>
          ${service.name} <br/> 
          Design
        </h3>
      </div>
    </div>
  `;
});
getById("services-grid").innerHTML = servicesContent;

//JOBS GRID
let jobsContent = "";
arrJobs.forEach((job, index) => {
  jobsContent += `
    <div class="grid-card">
      <img src="${job}" alt="job_${index}">
    </div>
  `;
});
getById("jobs-wrapper").innerHTML = jobsContent;

//EXPERIENCES GRID
let experiencesContent = "";
arrMainInfo.forEach((exp, index) => {
  let isOdd = (index + 1) % 2 === 0;
  let styleOdd = "";
  if (isOdd) {
    styleOdd = `
      color: #f2f2f2;
      background: #870000;
      background: -webkit-linear-gradient(to right, #190a05, #870000);
      background: linear-gradient(to right, #190a05, #870000);
    `;
  }

  experiencesContent += `
    <div class="grid-card" style="${styleOdd}">
      <small>${exp.date}</small>
      <h3>${exp.name} Design</h3>
      <h4>${exp.company}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aliquam explicabo sed soluta deserunt blanditiis!
      </p>
    </div>
  `;
});
getById("experience-grid").innerHTML = experiencesContent;
