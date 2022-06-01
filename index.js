function firstUniqueChar(str) {
  let counts = {};
  
  for(let i=0; i<str.length; i++) {
    let char = str[i];
    if(!(char in counts)) {
      counts[char] = 1;
    } else {
      counts[char] = counts[char] + 1;
    }
  }
  
  for (let i=0; i<str.length;i++) {
    let char = str[i];
    if (counts[char] === 1) {
      return i;
    }
  }
  
  return -1;
}

str1 = "leetcode"; //
console.log(firstUniqueChar(str1));

//Time Complexity: O(N) - we walk through the whole string of length N
//Space Complexity: O(1) - there are only 26 lowercase characters, so our hashmap won't have more than 26 items even if the string is infinitely long.

function validParens(str) {
  let hashTable = {"{":"}", "[":"]", "(":")"};
  let stack = [];
  
  for (let i=0; i<str.length; i++) {
    let char = str[i];
    if (char in hashTable) {
      // character is opening parentheses
      stack.push(hashTable[char]);
    } else if (stack.length>0 && stack[stack.length - 1] === char) {
      // character is closing parentheses but matches the top of our stack
      stack.pop();
    } else {
      // character is closing parentheses but it doesn't match the top of our stack
      return false;
    }
  }
  
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
  
}
str2 = "([]){}[]{()}";
console.log(validParens(str2));

//Time Complexity: O(N) - we walk through the full string of length N
//Space Complexity: O(N) in the worst case, we could have an infinitely long string full of all open parenthesis

function uniquePaths(matrix) {

  function traverse(x, y) {
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
      return 0;
    } else if (matrix[y][x] === 1) {
      return 0;
    } else if (x === matrix[0].length - 1 && y === matrix.length - 1) {
      return 1;
    }

    matrix[y][x] = 1;
    let sum = 0;
    sum += traverse(x+1, y);
    sum += traverse(x-1, y);
    sum += traverse(x, y+1);
    sum += traverse(x, y-1);
    matrix[y][x] = 0;
    return sum;
  }
  return traverse(0, 0);
}
matrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0]];

console.log(uniquePaths(matrix));
