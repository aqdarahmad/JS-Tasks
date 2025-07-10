
// PART 2 //
//optinal Q1------------------------------------------------------------------------------------------------------------
//Given: //Uset every to check if all values are numbers?

//To Check Result use : node Task2.js on terminal
const values = [10,20,"30",40]; 

const CheckIsNon = values.every(item => !isNaN(Number(item)));

//console.log(CheckIsNon);

   //optinal Q2------------------------------------------------------------------------------------------------------------

//Given: 
const animals = ["dog","elephant","cat","bee"];
// sorting them accroding to length,  then alphabetically if equal length

animals.sort((a,b) => { 
    if(a.length != b.length)
        return a.length - b.length;
    else{
      return a.localeCompare(b);  
    }
 
});
   //console.log(animals);

   //Q5------------------------------------------------------------------------------------------------------------

   //Given:
   const fruits = ["apple","banana","apple","orange","banana"];

   const findindex=fruits.lastIndexOf("banana");
   //console.log(findindex);

   //Q4------------------------------------------------------------------------------------------------------------
    const students = [{name:"Ali",grades:[90,85,88]},{name:"sara",grades:[70,40,60]},{name:"omar",grades:[75,40,78]}];

    //return only students who pass all subjects (grade>=60)
    students.filter(students=>students.grades.every(grades =>grades>=60)).map(students=>students.name);

    //console.log(students);

    //Q4-----------------------------------------------------------------------------------------------------------------------------------
    //GIVEN
    const products=[{name:"phone",price:600},{name:"Laptop",price:1200},{name:"Tablet",price:400}];
    //use reduce to find the product with highest price

    const HighsetPrice= products.reduce((a,b)=>{
        return a.price < b.price ? b : a;

    });

    //console.log(HighsetPrice);


    //Q3---------------------------------------------------------------------------------------------------------------------------
    //GIVEN: 
    const items=["apple","banana","apple","orange","banana"];
    //use reduce to count accurrences
    const newitems= items.reduce((a,b)=>{
    a[b] = (a[b]||0)+1;
    return a;
    },{});

    //console.log(newitems);

    //Q2------------------------------------------------------------------------------------------------------------------------------------
    //Given 
    const names=["Ali","Amal","Sara","Sami","Omar"];
    //create an obj that groups names by their starting letter
    const groupname = {};
    names.forEach(name=>{
        const firstletter = name[0];
        if(!groupname[firstletter]){
            groupname[firstletter]=[];
        }
        groupname[firstletter].push(name);
    });
    
    //console.log(groupname);
     

    //Q1----------------------------------------------------------------------------------------------------------------------------------------
    //Given 
    const users=[{name:"Ali",age:21},{name:"Nour",age:17},{name:"sara",age:19}];
    //Get an array of names of users who are 18 or older
     const olderages = users.filter(user => user.age >=18).map(user=>user.name);

     //console.log(olderages);
     //---------------------------------------------------------------------------------------------------------------------------------------------------
     //PART 1







    //Q1-------------------------------
    //Destrucure to get the fisrt and third colors
    const colors = ["red","green","blue"];
    const[firstcolr, , lastcolor]=colors;





    //Q2-----------------------------------
    //use array destructure to get only the 1st and 3rd scores
    const scores = [100,85,92,78];
       const[firstscore, , lastscore]=scores;


    
    //Q3-----------------------------------------------------------------------------------------------------------------------
    //use array destrucure to get name and city
    const usersy = {name:"Ali",age:25,city:"Nablus"};
    const {name , city} = usersy;


    //Q4-----------------------------------------------
    //destructure to get price and stock

     const product = {id:1,details:{price:200,stock:10}};

     const {details:{price,stock}}=product;



     //Q5-------------------------------------------------
     //write a func that takes an obj and return sum using destructure
       function sum(a,b){
        return a+b;
       }



     //Q6-----------------------------------------------------
     //destructure math and science scores normally
     //dest english score with a default value of 60
     //rename 'science' to 'sciScore' during destructu

     const student={name:"Rami",scores:{math:90,science:85,english:undefied}};

     const{
        scores:{math,
            science:sciScore,
            english = 60
        }
     
     }   = student;





     //Q7---------------------------------------------------------------
     //dest 'status'
     //dest the name of the second item

     const data = {status:"ok",items:[{id:1,name:"pen"},{id:2,name:"Pencile"}]};

     const {status , items:[,{name:secondName}]}=data;



     ///Q8---------------------------------------------------------------
     //write a func that takes 'config' and extracts 'port' and 'ssl.key' using parameter dest
    const config={server:{port:3000,ssl:{enabled:true,key:"abc123"}}};
    function extracts({server:{port , ssl:{key}}}){
        return {port , key};
    }



    //Q9--------------------------------------------------
    //loop over users and print their id and name using destr inside loop
    const usersx = [{id:1,info:{name:"Ali",age:22}},{id:2,info:{name:"nour",age:24}}];


    for(const{id, info:{name}}of usersx){
        console.log(`ID:${id}, Name:${name}`);
    }




    //Q10-----------------------------------------------------
    //Dest the fisrt value into a 
    //skip the second
    //collect the rest into 'others'
    const nums = [10,20,30,40,50];
   
    const [a, ,... others]=nums;
    //console.log(a);
    //console.log(others);






    //Q11------------------------------------------------------
    //write a func 'createuser' that accepts an obj with the following strucure:
    //{username,eamil,role="user"}
    //destr the role and rename it to 'userRole' in the func signature
    //return a string username has role userrole

    // creatUser({username:"sara",email:"saraa@mail.com"});

    function createusers({username,email,role="user"}){
        const userRole= role;
        return `${username} has role ${userRole}`;
    }

    //console.log(createusers({username:"sara",email:"sara@gmail.com"}))






    














