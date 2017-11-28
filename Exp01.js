let z=0;
let limit = 50000;

for(let a=0;a<limit;a++){
    z+=a;
}


for(let b=0;b<limit;b++){
    z+=b;
    z = z/2;
    z++;
}
