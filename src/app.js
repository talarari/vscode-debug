
console.log('hi')

async function helloAsyncFunction(name){
    return `hello ${name}`;
}


(async function(){
    const greeting = await helloAsyncFunction('vscode-debug')
    console.log(greeting);
})()

