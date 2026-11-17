//1. eldala el 'ola bngeb mkan asghr 3nsr f el ka'ma (Index)

function findSmallest(arr) {
    let smallest = arr[0];  //hna bnftrd en awl 3nsr hwa el asghr
    let smallestIndex = 0;  //bn7fz mkano (0)

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];  //lw lkena rkm asghr fbn7dth el kema
            smallestIndex = i;  //w n7dth el mkan
        }
    }
    return smallestIndex;  //bnrg3 mkan asghr rkm
}
//2. eldala el tanya btrtb el ka'ma b est5dam el dala el 'ola

function selectionSort(arr) {
    let newArr = [];
    // hna hn7fz el tol el'asle ll ka'ma l'n tolha hy'l kl shwya lma nms7 mnha
    let originalLength = arr.length;

    for (let i = 0; i < originalLength; i++) {
        // bngeb mkan asghrrkm mwgod 7alya
        let smallestIndex = findSmallest(arr);

        //btms7 el 3nsr mn el ka'ma el aslsya w btrg3o lena f JS f splice dala
        //bna5d el 3nsr dh w bndefo f el ka'ma el gdeda b esd5dam push
        let smallestItem = arr.splice(smallestIndex, 1)[0];
        newArr.push(smallestItem);
    }

    return newArr;

}

// tgrbt el kod
const myNumbers = [10, 5, 2, 6 ,8];
console.log(selectionSort(myNumbers)); 