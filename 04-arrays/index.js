const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function getPairs(name) {
    let male = [];
    let female = [];
    let pairs = [];

    for (i = 0; i < name.length; i++) {
        (name[i].charAt(name[i].length - 1) == "а")  
                                                ? female.push(name[i])  
                                                : male.push(name[i]);  
    }
        for (j = 0; j < female.length; j++) {
            pairs[j]= [];
            pairs[j].push(male[j] + " i " + female[j]);
        }
    return pairs;  
}
const studensPairs = getPairs(students);
console.log(studensPairs);

const studentsSubject = (pair, theme) => {
    for (i = 0; i < pair.length; i++) {
        pair[i].push(theme[i]);
    }
    return pair;
}
const studentsTheme = studentsSubject(getPairs(students), themes);
console.log(studentsTheme);


const studentMarks = (student, value) => {
    let array = [];
    for (i = 0; i < student.length; i++) {
        array[i] = [student[i], value[i]]; 
    } 
    return array;   
}
console.log(studentMarks(students, marks));

const randomMarksForProject = (unitedAll) => {
    for (i = 0; i < unitedAll.length; i++) {
        let random = Math.floor(Math.random() * 5 + 1);
        unitedAll[i].push(random);
    }
    return unitedAll;
}

const randomMarks =  randomMarksForProject(studentsSubject(getPairs(students), themes));
console.log(randomMarks);



