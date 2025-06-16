
const marvel_heros = ["thor", "ironman", "spiderman", "hulk"];
const dc_heros = ["batman", "superman", "batman"];

// marvel_heros.push("dc_heros");
// console.log(marvel_heros[3][1]);


const new_heros =[...marvel_heros,...dc_heros];
//console.log(new_heros);


const another_array = [1,2,3,[4,5,6],[7,8,9],[10,11]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// console.log(Array.isArray("Garima"))
// console.log(Array.from("Garima"));
// console.log(Array.from({name: "Garima"}))





