const generateProfiles = (allEmployees) => {
    const managers = allEmployees.filter(employee => employee.getRole() === 'Manager');
    const engineers = allEmployees.filter(employee => employee.getRole() === 'Engineer');
    const interns = allEmployees.filter(employee => employee.getRole() === 'Intern');

    const specialFeature = (employee) => {
        if (employee.getRole() === "Manager"){
            return `Office Number: ${employee.getOfficeNumber()}`;
        } else if (employee.getRole() === "Engineer") {
            return `Github: <a href="github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
        } else if (employee.getRole() === "Intern") {
            return `School: ${employee.getSchool()}`;
        }
    }

    const employeeSpread = [...managers, ...engineers, ...interns]

    return employeeSpread.map(employee => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h3>
                <h4 class="card-text">ID Number: ${employee.getId()}</h4>
                <h4 class="card-text">
                    Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                </h4>
                <h4 class="card-text">${specialFeature(employee)}</h4>
            </div>
        </div> 
        `
    })
}



const createMainPage = (allEmployees) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <title>My Team Profiles</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="container">
            <div class="card-columns">
                ${generateProfiles(allEmployees)}
            </div>
        </div>
        <footer>
            made with Team Profile Generator
        </footer>
    </body>
    `
}

module.exports = createMainPage;