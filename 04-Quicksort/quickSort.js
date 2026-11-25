function quicksort(arr) {
    //base case en el arrays with one 0 or 1 element hma already sorted

    if (arr.length < 2) {
        return arr;

    }

    const pivot = arr[0];
    const less = arr.slice(1).filter((el) => el <= pivot);
    const greater = arr.slice(1).filter((el) => el > pivot);

    return [... quicksort(less), pivot, ... quicksort(greater)];

}


//Test cases
console.log(quicksort([10, 5, 3, 2]));
console.log(quicksort([]));
console.log(quicksort([7]));
console.log(quicksort([4,2,7,6,9,10])); 