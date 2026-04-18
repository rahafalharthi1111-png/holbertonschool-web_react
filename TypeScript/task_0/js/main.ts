interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Lila",
    lastName: "Doe",
    age: 25,
    location: "Paris"
};
const student2: Student = {
    firstName: "Doe",
    lastName: "Lila",
    age: 23,
    location: "Lyon"
};

const studentsList: Student[] = [student1, student2];

let newTable: HTMLTableElement
newTable = document.createElement("table")

let myTr: HTMLTableRowElement
myTr = document.createElement("tr")

for ( const student of studentsList) {
    myTr = document.createElement("tr")
    let myTd: HTMLTableCellElement
    myTd = document.createElement("td")
    myTd.innerText = student.firstName
    myTr.appendChild(myTd)

    myTd = document.createElement("td")
    myTd.innerText = student.location
    myTr.appendChild(myTd)

    newTable.appendChild(myTr)
}
document.body.appendChild(newTable)
