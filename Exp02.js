let list = [];
let limit = 50000;


/**/

for(let a=0;a<limit;a++){
    list[a] =a;
}

for(let b=0;b<limit;b++){
    list[limit+b] = b;
}

/**/

for(let a=0;a<limit;a++){
    for(let b=0;b<limit;b++){
        list[a+b] = a+b;
    }
}

/**/
