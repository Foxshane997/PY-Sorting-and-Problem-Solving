// Write your solution for algorithm 2 below

function sortNumericalList(unsortedList){ 
    // Copying the List/Array
    let sortedList = [...unsortedList];

    // Ascending order
    sortedList.sort((a,b)=> a - b);

    return sortedList
}

const unsortedList = [5, 3, 8, 1, 2]
const sortedList = sortNumericalList(unsortedList)

console.log("Copy Sorted List", sortedList)
console.log('Original List', unsortedList)