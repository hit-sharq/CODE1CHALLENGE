const prompt =require('prompt-sync')({sigint:true})
function grading(studentMark){// Function to determine the grade based on the student's mark
    if (studentMark<0 && studentMark>100){
        return 'invalid marks';// Return 'Invalid marks' if the mark is outside the valid range
    }
    else if(studentMark>79 && studentMark<=100){//if marks are within ranges then ouput is A
        return 'A'
    }else if(studentMark>60 && studentMark<79){
        return 'B'
    }else if (studentMark>49 && studentMark<59){
        return 'C'
    }else if (studentMark>39 && studentMark <49) {
        return 'D'
    }  else if(studentMark>=0 && studentMark<39){
        return 'E'// Return 'E' for marks between 0 and 39
    }
    }
    const marks = parseInt(prompt("enter your marks: "))
    console.log(grading(marks))