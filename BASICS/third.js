let marks=[97,82,75,64,36];
let student=[45,6,5,89];
console.log(marks);
console.log("marks length",marks.length);
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}
let a=0;
// using for-of loop
for(let mark of marks)
{
   a=a+mark;
}
console.log(a/(marks.length)); 
marks.push(66);
marks.pop(66);
console.log(marks.toString());
console.log(marks);
let all=marks.concat(student);
console.log(all);
// slice use
console.log(all.slice(1,5));
console.log(marks.splice(2,2,101,102));
console.log(marks.splice(2,0,103,104));