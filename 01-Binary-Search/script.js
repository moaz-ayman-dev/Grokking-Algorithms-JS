function binarySearch(list, item) {
    //1. hna bn7dd bdaya w nhayt el b7th (Indexes)
    let low = 0;
    let high = list.length - 1;

    //2. talma mwslnash l3nsr wahd fkt yb'a nstmr fe elba7th
    while (low <= high) {
        // 7sab el mntsf w n'rb el rkm l'asfl 3shan ntgnb el ksor
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        //ele7tmal el awl en e7na wgdna el3nsr
        if (guess === item){
            return mid;
        }

        //ele7tmal el tane en elt5men akbr mn el rkm elmtlob
        if (guess > item){
            high = mid - 1;
        }

        //ele7tmal eltalt en elt5men asghr mn el rkm elmtlob
        else {
            low = mid + 1;
        }

    }
    
        //3. fe 7al 3dm wgod 3nsr fe el ka'ma
        return null;
}
// tgrbt el kod
const myList = [1,3,5,7,9]
console.log(binarySearch(myList, 3)); //elnatega elmtwk3a : 1 (mkan rkm 3)
console.log(binarySearch(myList, -1)); //msh mwgoda null . e7na hna dwrna 3la rkm msh mwgod 'sd 3shan ttl3 ntegt el null