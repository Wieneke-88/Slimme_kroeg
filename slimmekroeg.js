const Age = 18;
const isFemale = true;
const driverStatus = "bob";
const Bram = true;
const Sarah = true;
const totalAmount = 100

if (Age >= 18) {
    console.log("Je mag naar binnen!");
} else if (age < 18) {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log("Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen");
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

var name = "Tim";
if (Bram || Sarah) {
    console.log("Je krijgt een gratis biertje!")
} else {
    console.log("Je krijgt geen gratis biertje")
}

if (totalAmount > 25) {
    console.log("Je krijgt gratis (vega)bitterballen!");
} else if (totalAmount > 50) {
    console.log("Je krijgt een portie nacho's!");
} else if (totalAmount > 100) {
    console.log("Je krijgt een gratis fles champagne");
} else {
    console.log("Helaas, geen extra's");
}

var myAge = 25;

if (myAge >= 18 && myAge <= 25) {
    console.log("Je krijgt 50% korting!");
}

