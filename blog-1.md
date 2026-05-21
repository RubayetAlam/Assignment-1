TypeScript is basically used for type safety and make javascript safer and more predicatable with bug free code without using console/output. However, one key word can silently remove most of its benefits which is keyword 'any'.Because of this,it is called as type safety hole. With this we get poor developer experiance. For Example:

let value:any='Hello World!';
value=100;
console.log(value.toUpperCase());

Above there, we can see that value property declared as 'any'. later on, we can change its types string to number. which is unpredictable and its doesn't give me any error while write code or in console. After that, I can also use toUpperCase() method without any problem. its gives me error in runtime which is spread error without any checking.

Its seems easy to find buds in small project like this. But, in Larger Application its hard to find error and don't get any benefit of using typescript. 

Whereas, 'unknown' is safer option here. Developer can easily varify while typing code. So, Its a wise decision to use 'unknown' instead of 'any' if you dont know its type.

let valueOfUnknown:unknown= "Hello World!";
console.log(valueOfUnknown.toUpperCase()) //It shows error
