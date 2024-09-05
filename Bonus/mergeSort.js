// Merge Algorithm to combine two sorted lists.

function merge(lst1, lst2) {
    let results = [];
    
    while (lst1.length > 0 && lst2.length > 0) {
        if (lst1[0] <= lst2[0]) {
            results.push(lst1.shift()); // Remove and add the smallest element one half.
        } else {
            results.push(lst2.shift()); // Remove and add the smallest element other half.
        }
    }
    
    // Add the remaining elements from lst1 or lst2.
    return results.concat(lst1).concat(lst2);
}

// Merge function
function mergeSort(lst) {
    if (lst.length <= 1) {
        return lst;
    }
    
    const middleIndex = Math.floor(lst.length / 2);
    const left = lst.slice(0, middleIndex);
    const right = lst.slice(middleIndex);
    // "Slicing" the array into parts & then merging them together after sorting.
    const leftPartition = mergeSort(left);
    const rightPartition = mergeSort(right);
    // Merging the "Sliced" parts of array.
    return merge(leftPartition, rightPartition);
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = mergeSort(array);

console.log("Sorted Merged Array:", sortedArray);
