// check if a string is anagram of another string 

const isAnagram = (str1, str2) => {
   // Helper function to clean and sort a string
     // remove all non-alphanumeric characters (including underscores) from a string
   const formatStr = (str) => 
     str.toLowerCase().replace(/[\W_]+/g, '').split('').sort().join('');
 
   return formatStr(str1) === formatStr(str2);
 };
 
 module.exports = isAnagram;
