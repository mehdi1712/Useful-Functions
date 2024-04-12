// merge 2 array and remove duplicate

const mergeArraysAndRemoveDuplicate = (arr1 , arr2) => [...new Set([...arr1 , ...arr2])]

module.exports = mergeArraysAndRemoveDuplicate