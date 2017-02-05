
async function helloAsyncFunction(name){
    var a = `hello ${name}`;
    return a;
}


(async function(){
    const greeting = await helloAsyncFunction('vscode-debug')
    console.log(greeting);
})()

