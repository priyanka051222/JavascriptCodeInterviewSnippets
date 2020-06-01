//Formats a string with comma currency format.

function  format(str) {
 return str.replace(/(\d)(?=(\d{3})+(?!\d))/, '$1,');
  
}

console.log(format('10000000'));
