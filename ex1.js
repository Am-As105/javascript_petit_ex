



const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];



 //1. Récupérer tous les nombres pairs
  console.log("Récupérer tous les nombres pairs");
let i  = 0;
while (i  < data.length ){
    if ( data[i] % 2 === 0){
        console.log(data[i]);
        
    }
    i++;
    
}

// . Récupérer tous les nombres impairs

 console.log("Récupérer tous les nombres  impairs");
i  = 0 ;

while (i  < data.length ){
    if ( data[i] % 2 !== 0){
        console.log(data[i]);
        
    }
    i++;
    
}


//3. Doubler chaque nombre du tableau
 console.log("R3. Doubler chaque nombre du tablea");
i  = 0 ;

while (i  < data.length ){
    if ( data[i] % 2 !== 0){
        console.log(data[i]  +  "="  + data[i] * 2);
        
    }
    i++;
    
}

// Trouver le plus grand nombre
console.log(" Trouver le plus grand nombre");



i = 0;
let j ;
let k ;

while (i  < data.length ){
    j = 0;
    while ( j < data.length ){
        if (data[j] > data[j + 1]){

            let swap;

            swap = data[j];
            data[j] = data[j + 1];
            data[j+ 1] = swap;
            
        }
        j++;
        
    }

    k = i;
    
    i++;
    

    
    
}
console.log( "max = " +  data[k]);


console.log(" Trouver le plus petit nombre");



i = 0;

k = 0;

while (i  < data.length ){
    j = 0;
    while ( j < data.length ){
        if (data[j] > data[j + 1]){

            let swap;

            swap = data[j];
            data[j] = data[j + 1];
            data[j+ 1] = swap;
            
        }
        j++;
        
    }

    k = i;
    
    i++;
    

    
    
}

console.log( "min = " +  data[0]);




//6. Calculer la somme du tableau

console.log("6. Calculer la somme du tableau");



i = 0;
let  somme  = 0;


while (i < data.length){

    somme = somme + data[i]; 
    
    i++;
    
}

console.log("somme = " + somme);



console.log("6. Calculer la  moyane du tableau");


i = 0;
 let moyane  = 0;
// let valuesomme;

while (i < data.length){

    somme = somme + data[i];

   
    i++;
    
}

console.log(" moyane = " +  somme / i);



