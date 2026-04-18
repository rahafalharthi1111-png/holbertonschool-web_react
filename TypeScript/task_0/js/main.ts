interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Alice",
    lastName: "Dupont",
    age: 22,
    location: "Paris"
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Martin",
    age: 24,
    location: "Lyon"
};

const studentsList: Student[] = [student1, student2];


const table = document.createElement('table');
const headerRow = document.createElement('tr');
const thFirstName = document.createElement('th');
thFirstName.textContent = 'First Name';
const thLocation = document.createElement('th');
thLocation.textContent = 'Location';

headerRow.appendChild(thFirstName);
headerRow.appendChild(thLocation);

table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = student.firstName;
    const tdLocation = document.createElement('td');
    tdLocation.textContent = student.location;

    row.appendChild(tdFirstName);
    row.appendChild(tdLocation);
    table.appendChild(row);
});

document.body.appendChild(table);
