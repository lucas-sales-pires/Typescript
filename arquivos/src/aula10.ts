//NULL - UNDEFINED - UNKNOWN

//NULL - Tipo Nulo
//UNDEFINED = Indefinido
//UNKNOWN - Desconhecido
let tnome: string | null;
// tnome = "Bruno";
tnome = null;
console.log(tnome);

let tnome2;
tnome2 = "Lucas"
console.log(tnome2)

let vnome3: unknown = tnome; // unknown só pode ser atribuído em tipos unknown ou any
let vnum = vnome3;
console.log(vnome3)

