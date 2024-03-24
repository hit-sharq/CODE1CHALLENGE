const prompt=require('prompt-sync')({sigint:true})
function speedDetector(speed){//function thats takes the speed
    if (speed<=70){
        return 'ok'
    }
    else{
        // Calculate demerit points based on the speed exceeding the limit
        const demeritPoints=(speed-70)/5;
        // Check if demerit points exceed the limit for license suspension
        if (demeritPoints>12){
            return "License suspended"
             // Return 'License suspended' if demerit points exceed 12
        }else{
            return `points: ${demeritPoints}`
        }
    }
}
const speed=parseInt(prompt("enter the speed; "))
console.log(speedDetector(speed))