// FUNCTION THAT CALCULATES THE BALANCE AND LEVEL OF THE HEROES
function rankCalculator(wins, losses) {
  let balance = wins - losses;
  let rank = "";

  if (wins <= 10) {
    rank = "Iron";
  } else if (wins >= 11 && wins <= 20) {
    rank = "Bronze";
  } else if (wins >= 21 && wins <= 50) {
    rank = "Silver";
  } else if (wins >= 51 && wins <= 80) {
    rank = "Gold";
  } else if (wins >= 81 && wins <= 90) {
    rank = "Diamond";
  } else if (wins >= 91 && wins <= 100) {
    rank = "Legendary";
  } else {
    rank = "Immortal";
  }

  return { balance, rank };
}

let wins = 95;
let losses = 25;
let result = rankCalculator(wins, losses);
// console.log(
//   `The Hero has a balance of ${result.balance} and is at level ${result.rank}`,
// );
console.log(
  `O Herói tem de saldo de ${result.balance} está no nível de ${result.rank}`,
);
