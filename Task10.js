let rows=prompt("enter a number of rows :")
for(i=1;i<=2*rows-1;i++){
    let cols=(i<rows)?i:2*rows-i;
    let spaces=(i<rows)?rows-i:i-rows;
     let str=""
    for(k=1;k<=spaces;k++){
        str=str+" "
    }
    for(j=1;j<=cols;j++){
       str=str+"* "
    }
    console.log(str)
}

let rows=prompt("enter a number of rows :")
for(i=1;i<=2*rows-1;i++){
    let cols=(i<rows)?i:2*rows-i;
    let spaces=(i<rows)?rows-i:i-rows;
     let str=""
    for(k=1;k<=spaces;k++){
        str=str+" "
    }
    for(j=1;j<=cols;j++){
        if(j==1||i==j||j==rows-i_+1){
            str=str+"* "
        }
        else{
            str=str+"  "
        }
    }
    console.log(str)
}