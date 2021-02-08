// Playing with Objects
// How would you print/log John's age?
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  

console.log("test");
var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];

for(var i = 0; i < users.length; i++){
    if(users[i].name == "John"){
        console.log(users[i].age);
    }
}

console.log(users[0].name);

for(var i = 0; i < users.length; i++){
    console.log(users[i].name, users[i].age);
}