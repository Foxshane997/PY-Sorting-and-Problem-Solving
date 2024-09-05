// Write your solution for algorithm 3 below
function sortListDescending(unsortedList) {
    let sortedList = [...unsortedList];

    sortedList.sort((a, b) => a - b);
    
    sortedList.reverse();

    return sortedList;
}

const unsortedList = [5, 3, 8, 1, 2];
const sortedDescendingList = sortListDescending(unsortedList);

console.log("Sorted Copied Numerical List Descending:", sortedDescendingList);
