console.log("coucou depuis la console");

answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let answerNumber = Number(answer);
let hash = "#";
let space = " ";


let row = 1;
while(row <= answerNumber){
  let spaceNumber = answerNumber - row
  let spaceLine = space.repeat(spaceNumber)
  let hashTag = hash.repeat(row)
  let spaceHash = spaceLine + hashTag;
  console.log(spaceHash)
  row++
}