function getAllStudentsWithAddress(){
    var students=[{
        name:"Swagat Swain",
        age:25,
        emailId:"ssswagatss@gmail.com",
        address:{
            city:"Bhubaneswar",
            state:"Odisha",
            zip:"755005"
        }
    },
    {
        name:"Pravat Routray",
        age:24,
        emailId:"pravat@gmail.com",
        address:{
            city:"Cuttack",
            state:"Odisha",
            zip:"755006"
        }
    },
    {
        name:"Bikram Biswal",
        age:45,
        emailId:"bikram@gmail.com",
        address:{
            city:"Balasore",
            state:"Odisha",
            zip:"72345"
        }
    },
    {
        name:"Ratnakar Behera",
        age:44,
        emailId:"ratnakar@gmail.com",
        address:{
            city:"Jajpur",
            state:"Odisha",
            zip:"755046"
        },
        parents:{
            father:"Sourajit Bal",
            mother:"Devi Prasad Mohanty"
        }
    }];
    return students;
}

function getAllStudents(){
    var students=[{
        name:"Swagat Swain",
        age:25,
        emailId:"ssswagatss@gmail.com"
    },
    {
        name:"Pravat Routray",
        age:24,
        emailId:"pravat@gmail.com"
    },
    {
        name:"Bikram Biswal",
        age:45,
        emailId:"bikram@gmail.com"
    },
    {
        name:"Ratnakar Behera",
        age:44,
        //emailId:"ratnakar@gmail.com"
    }];
    return students;
}