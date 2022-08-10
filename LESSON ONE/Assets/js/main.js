//JavaScript
// const btn = document.querySelector(".btn");
// let btn = document.querySelector(".name");

// btn.addEventListener("click" , () => {
//     //let name = "john doe";
//     //console.log(name.toUpperCase());
//     btn.innerHTML = "clicked";
// });
console.log('hello world')

// function addName (time, name) {
//     return new Promise((resolve, reject) => {
//         if(name) {
//             setTimeout(()=>{
//                 console.log(name)
//                 resolve();
//             },time)
//         }else{
//             reject('No such name');
//         }
//     })
// }

// addName(2000, 'joel')
// .then(()=>addName(2000, 'Victoria'))
// .then(()=>addName(2000, 'john'))
// .then(()=>addName(2000, 'Doe'))
// .then(()=>addName(2000, 'Sarah'))
// .catch((err)=>console.log(err))

// Array Map

// let users = [
//     { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
//     { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
//     { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
//   ];

//   console.log(users.map((user)=> console.log(user.firstName)));
  
//   let singleUser = users.map((user)=>{
//     //let's add the firstname and lastname together
//     let fullName = `${user.firstName} ${user.lastName}`
//     return fullName
//   });
//   console.log(singleUser)

//   let user = [
//     { firstName: "Susan", age: 14 },
//     { firstName: "Daniel", age: 16 },
//     { firstName: "Bruno", age: 56 },
//     { firstName: "Jacob", age: 15 },
//     { firstName: "Sam", age: 64 },
//     { firstName: "Dave", age: 56 },
//     { firstName: "Neils", age: 65 }
//   ];
  
//   // for young people
//   const youngPeople = users.filter((person) => {
//     return person.age <= 15;
//   });
  
//   //for senior people
//   const seniorPeople = users.filter((person) => person.age >= 50);
  
//   //console.log(seniorPeople);
//   console.log(youngPeople);
  
//   const Bruno = users.find((person) => person.firstName === "Bruno");
  
//   console.log(Bruno);

//   let user = {

//   }
const insert = document.querySelector(".users")

  let users = [
    { firstName: "Sarah", lastName: "Stanley"},
    { firstName: "David", lastName: "josh"},
    { firstName: "Joshua", lastName: "white"},
    { firstName: "john", lastName: "doe"},
    { firstName: "samuel", lastName: "tom"},
    { firstName: "alex", lastName: "trent"},
    { firstName: "emmanuel", lastName: "wood"},
    { firstName: "chritsabel", lastName: "bush"},
  ];
  
  let singleuser  = users.map((user)=>{
    //let's add the firstname and lastname together

    //let fullName = user.firstName + ' ' + user.lastName;
    let fullName = `${user.firstName} ${user.lastName}`
    return fullName;
  });
    
  console.log(singleuser)

  insert.innerHTML = `${singleuser}`;
  
  