function receivesAFunction(callback){
    console.log(callback());
}

function returnsANamedFunction(){
    return function nope(){  
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}