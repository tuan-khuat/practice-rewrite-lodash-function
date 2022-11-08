// _.chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// // => [['a', 'b', 'c'], ['d']]

const chunk = (array: string[], size: number) => {
    const newArray: string[][] = [];
    for (let i = 0; i < array.length; i += size) {
        let step = i + size;
        let sizeArray = array.slice(i, step);
        newArray.push(sizeArray);
    }
    console.log(newArray);
};

chunk(['a', 'b', 'c', 'd'], 1);

