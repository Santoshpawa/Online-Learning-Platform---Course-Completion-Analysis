
const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50},
    { name: "Sita", completedLessons: 25, totalLessons: 50},
    { name: "Manoj", completedLessons: 30, totalLessons: 60},
    { name: "Pooja", completedLessons: 48, totalLessons: 50},
    { name: "Anil", completedLessons: 15, totalLessons: 50}
]

let result1=studentsProgress.filter(({completedLessons,totalLessons})=>
                            completedLessons>=totalLessons/2)

let result2=studentsProgress.map(({name: n,totalLessons:total,completedLessons:done})=>({
    Name: n,
    Completed_Percentage: (done)*100/total 
}))

let result3=result2.reduce((acc,curr)=>{
    acc=acc+curr.Completed_Percentage
    return (acc);
},0)

let result4=result2.filter(({Completed_Percentage: per})=> per>80)

console.log(result1)
console.log(result2)
console.log(result3/result2.length)
console.log(result4)
    