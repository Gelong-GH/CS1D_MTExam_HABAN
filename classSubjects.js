// Collecting user information using prompt()
let subjectTitle = prompt("Enter Subject Title: ");
let classSchedule = prompt("Enter Class Schedule (Time, Days): ");
let classroom = prompt("Enter Classroom: ");
let classInstructor = prompt("Enter Class Instructor: ");
let studentName = prompt("Enter Student Name: ");

// Logging the collected information in a formatted string
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);

/* **prompt() --> Collects user input by making an Dialog box
   
   **${template literals} --> this function uses backticks and allows to embed expressions
                            such us variables directly within the string
 */