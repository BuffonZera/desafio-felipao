let herois = [
  { nome: "Chamber", xp: 500 }, // Ferro
  { nome: "Cypher", xp: 1700 }, // Bronze
  { nome: "KillJoy", xp: 2500 }, // Prata
  { nome: "Omen", xp: 6800 }, // Ouro
  { nome: "Sage", xp: 7500 }, // Platina
  { nome: "Reyna", xp: 8700 }, // Ascendente
  { nome: "Jett", xp: 9500 }, // Imortal
  { nome: "Viper", xp: 10500 }, // Radiante
];
for (let i = 0; i < herois.length; i++) {
  let nome = herois[i].nome;
  let xp = herois[i].xp;
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp < 2000) {
    nivel = "Bronze";
  } else if (xp < 3000) {
    nivel = "Prata";
  } else if (xp < 7000) {
    nivel = "Ouro";
  } else if (xp < 8000) {
    nivel = "Platina";
  } else if (xp < 9000) {
    nivel = "Ascendente";
  } else if (xp < 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  console.log("O Heroi de nome " + nome + " tem o nivel " + nivel);
}
