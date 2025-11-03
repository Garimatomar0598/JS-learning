
const marvel_heros = ["thor", "ironman", "spiderman", "hulk"];
const dc_heros = ["batman", "superman", "batman"];

// marvel_heros.push("dc_heros");---- push method ki help se marvel_heros variavble main current values ke last main dc_heros ki sari values/enteries add ho jayegi
// console.log(marvel_heros[3][1]);---- answer is hulk and irorman


const new_heros =[...marvel_heros,...dc_heros];
//console.log(new_heros);


const another_array = [1,2,3,[4,5,6],[7,8,9],[10,11]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//flat method - ye array ko nested karne ke liye used hota hai, it means array ke array ho toh usko single result main values print karvane ke liye flat method used hoga

// console.log(Array.isArray("Garima"))
// console.log(Array.from("Garima"));
// console.log(Array.from({name: "Garima"}))





