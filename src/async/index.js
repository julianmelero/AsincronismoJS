const doSomethingAsync = () => {
    return new Promise((resolve,reject) => {
        if(true) {
            setTimeout(() => resolve("Do Somethig Async"), 3000);
        }
        else{
            reject(new Error('Test error'));
        }
    })
}


const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something)
};

console.log("Before");
doSomething();
console.log("After");

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    }
    catch(error) {
        console.error(error);
    }
}


console.log("Before 2");
anotherFunction();
console.log("After 2");
