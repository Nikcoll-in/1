// 3. Дана строка. Порахувати кількість голосних літер.                ПЕРЕПИСАТИ В ЦИКЛІ

function isVowel(ch) {
  ch = ch.toLowerCase();
  return (
    ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "y" || ch == "u"
  );
}
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) if (isVowel(str[i])) ++count;
  return count;
}
let str = "NumberAEO";
console.log(countVowels(str));
