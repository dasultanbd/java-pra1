//odd num

for(i=0; i<20; i++){
    if(i%2===1){
        console.log('odd',i);
    }
}
//even num
for(i=0; i<20; i++){
    if(i%2!==1){
        console.log('even',i);
    }
}
for(i=0; i<=30; i++){
    if(i%5===0){
        console.log('5',i);
    }
}
for(i=0; i<=30; i++){
    if(i%3===0 || i%5===0){
        console.log('p',i);
    }
}
for(i=0; i<=30; i++){
    if(i%3===0 && i%5===0){
        console.log('7',i);
    }
}
