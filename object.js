var student = {id:121, phone:1745, name:"shuvo"};
var student2 = {id:122, phone:17454, name:"mahi"};
var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];

//update phone
student2.phone = 5425779;
student2["phone"] = 7878787;
student2[phonePropName] = 99991111;


//add content 
student2.cenema = "Friend Request";
student2["cenema"] = "Smart Girl";



console.log(phoneNo1);
console.log(student2);