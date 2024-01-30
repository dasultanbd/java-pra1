const carPrice=1100;
if(carPrice>=1400){
    const discount = carPrice * 15 / 100;
    const payAmount= carPrice - discount
    console.log(payAmount);
}
else if(carPrice>=1200){
    const discount = carPrice * 10 / 100;
    const payAmount= carPrice - discount
    console.log(payAmount);
}
else if(carPrice>=1100){
    const discount = carPrice * 5 / 100;
    const payAmount= carPrice - discount
    console.log(payAmount);
}
else{
    console.log(carPrice);
}