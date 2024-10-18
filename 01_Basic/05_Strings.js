const name="Saeed"
const RepoCount= 7

//console.log(name + RepoCount + " Value");
console.log(`Hiii My Name is ${name.toUpperCase()} and my repo count is ${RepoCount}`);

const gameName=new String('ClashOfClans-Pro')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(1,5)
console.log(newString);

const anotherString= gameName.slice(-16,2)
console.log(anotherString);

const newStringOne = "   Saeed Ahmed  01  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://saeedahmed.com/shaikh%56saeed"
console.log(url.replace("%56","-"));

console.log(url.includes('saeed'));
console.log(url.includes('abdul'));

console.log(gameName.split(''));
