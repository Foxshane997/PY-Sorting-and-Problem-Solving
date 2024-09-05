// Write your solution for algorithm 1 below

function sortNumericalList(list) {
    list.sort(function(a,b){
        return a - b;
    });
    return list
}

const unsortedList = [5, 3, 8, 1, 2];
const sortedList = sortNumericalList(unsortedList);

console.log('Sorted List - ', sortedList);
console.log('Unsorted List - ', [5, 3, 8, 1, 2])