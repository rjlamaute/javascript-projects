function makeLine(size, symbol="#") {
    let line = '';
    for(let i=0; i<size; i++) {
        line += symbol;
    }
    return line;
}

// console.log(makeLine(4));

// function makeSquare(size) {
//     let square = '';
//     for(let i=0; i<size; i++) {
//         square += "\n" + makeLine(size);
//     }
//     return square;
// }


// console.log(makeSquare(4));

function makeRectangle(width, height, symbol="#") {
    let rectangle = '';
    for(let i=0; i<height; i++) {
        rectangle += "\n" + makeLine(width, symbol);
    }
    return rectangle;
}

// console.log(makeRectangle(5,3));

function makeSquare(size, symbol="#") {
    return makeRectangle(size, size, symbol);
}

// console.log(makeSquare(4));

function makeDownwardStairs(height, symbol="#") {
    let stairs = '';
    for (let i=0; i<height; i++) {
        stairs += (makeLine(i+1, symbol) + '\n');
    }
    return stairs.slice(0,-1);
}

console.log(makeDownwardStairs(4));

function makeSpaceLine(numSpaces, numChars, symbol="#") {
    let chars = '';
    let spaces = '';
    for (let i=0; i<numSpaces; i++) {
        spaces += " ";
    }
    for (let i=0; i<numChars; i++) {
        chars += symbol;
    }
    return spaces + chars + spaces;
}

console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height, symbol="#") {
    let newTriangle = '';
    for (let i=0; i<height; i++) {
        newTriangle += (makeSpaceLine(height - i - 1, 2*i+1, symbol) + '\n');
    }
    return newTriangle.slice(0,-1);
}

console.log(makeIsoscelesTriangle(5, "*"));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height, symbol="#") {
    let diamond = '';
    let triangle = makeIsoscelesTriangle(height, symbol);
    let reversedTriangle = reverse(triangle);
    diamond = triangle + "\n" + reversedTriangle;
    return diamond;
}
console.log(reverse(makeIsoscelesTriangle(5)));
console.log(makeDiamond(5));
