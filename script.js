// alert("Welcome to JavaScript Learning");

// let a="Altamash";
// console.log(a.toString());

// let x= a.split('a');
// console.log(x);

// for(let i=1; i<=5; i++){
//     if(i==2){
//         console.log("Continue Statement Executed")
//         continue;
//     }

//     console.log(`Value of index is ${i}`);
// }

/*let i=1;
while (i!=0) {
    if(i==4){
    console.log('Good Going,',i);
    break;
    }
    console.log(`Index is: ${i}`);
    i++;

}*/


let names = ["abhi", 'raj', 'adil', 'sam']
let x = [1, 2, 3,]

let a = "Candy"
let b = "Crush"

let result = a.replace('C', 'M');
// console.log(result);
// console.log(names+x);

// result=names.slice(-3);
//  console.log(result);

// let rows=5;
// for (let i =1; i <=rows; i++){
//     console.log('*'.repeat(i));

// }

let arr = [1, 2, 3, 4, 5];

// for (const num of arr) {      // forof loop for array
//     console.log(num);
// }


// let objArray =            //objects inside array
//     [
//         { id: 1, name: "Ajay", city: "Tokyo" },
//         { id: 2, name: "Amir", city: "Delhi" },
//         { id: 3, name: "Zack", city: "Perth" }
//     ];

// console.log(objArray[2].city);

// const people = [
//     {
//       name: 'Alice',
//       age: 30,
//       job: 'Engineer'
//     },
//     {
//       name: 'Bob',
//       age: 25,
//       job: 'Designer'
//     },
//     {
//       name: 'Charlie',
//       age: 35,
//       job: 'Teacher'
//     }
//   ];
//   (people[2].age)=33;
//   console.log(people);

// for (const person of people) {
//     // console.log(person);
// }

function greeting(name) {
    let num=10;
    if(num==10&& num!=0){
        // console.log(`Welcome ${name} to javascript bootcamp`);
    }
    return `Hello ${name}`
}
// console.log(greeting('ALtamash'));

const fun= function(city){
    let x='Anmsoft Tech. pvt. ltd.'
    // console.log(x);
    return 'Miachel'
}
// console.log(fun());


const map= new Map();
map.set('IN', "INDIA");
map.set('AUS', "AUSTRALIA")
map.set('ENG', "ENGLAND")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key +":-"+ value);
}

// const people = [
//         {
//           name: 'Alice',
//           age: 30,
//           job: 'Engineer'
//         },
//         {
//           name: 'Bob',
//           age: 25,
//           job: 'Designer'
//         },
//         {
//           name: 'Charlie',
//           age: 35,
//           job: 'Teacher'
//         }
//       ];
//       people.forEach((item)=>{
        // console.log(item.job);
      // })

      let arr1=[1,2,3,3,4,5]
      arr.forEach(function (values){
    //    console.log(values);
      })

      const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
    //    console.log(materials.map((material)=> material.length));

    const greet= ()=> {
        // console.log('hello team');
    }
    //  greet();

    //  let nums=[27,8,3,5,1,9,4,12,20,80]
    //   nums.sort((a,b)=>a-b).reverse();
    //   console.log(nums);
    let nums=[27,8,3,5,1,9,4,12,20,80]
   let result1= nums.reduce((counter,current)=>{
           if(current%2==0){
            counter+=1
           }
          return counter
    },0);
    // console.log(`Total Even ELements Are ${result1}`);

    let pair=[
        {numbers:12, type:"square"},
        {numbers:9, type:"cube"},
        {numbers:3, type:"square"},
        {numbers:5, type:"cube"},
        {numbers:10, type:"square"},
        {numbers:7, type:"cube"},
        {numbers:15, type:"square"}
    ]
    
    // let result2=pair.reduce((counter1, current1)=>{
    //     if(current1.type=="square"){
    //         counter1+=1
    //     }
    //     return counter1
    // },0);
    // console.log(result2);
    //  console.log(pair);
    let processed_numbers=pair.map((number)=>{
        if(number.type=="square"){
          return number.numbers*number.numbers; 
        }else{
            return number.numbers*number.numbers*number.numbers;
        }    
    });
    // console.log(processed_numbers);
   
    let myfunction=()=>{
        const x=2;
        const y=0;
        try {
            console.log(x/y);
            throw new Error('Division by zero is not allowed');
        } catch (error) {
            console.error('Arithmetic Error Occured: ', error.message);
            return 'Error Has Occured'
        }   
    }
    // console.log(myfunction());
  
    function divide(a, b) {
        try {
          if (b === 0) {
            throw new Error('Division by zero is not allowed.');
          }
          return a / b;
        } catch (error) {
          console.error('Error in divide function:', error.message);
          return 'Error occurred'; // Handle the error gracefully
        } finally {
          console.log('Execution of divide function completed.');
        }
      }
    //   divide(2,0);

    let counts=[1, 2, [3, 4], [5, [6, 7]]];     //[2,4,[3,[6,8],[6,7]]];
    // let mergedArray= counts.flat();
    // console.log(mergedArray);

    let country=['France','USA','Greece','Finland','japan','turkey','russia']
      let allfunctions=country.filter((name)=>name!='France')
                               .map((name)=>name.toUpperCase())
                               .sort()
                               .reverse();
      // console.log(allfunctions);

      const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];
    
      let userBooks = books.filter( (bk) => bk.genre === 'History')
    
      userBooks = books.filter( (bk) => { 
        return bk.publish >= 1995 && bk.genre === "History"
    });
    console.log(userBooks);
