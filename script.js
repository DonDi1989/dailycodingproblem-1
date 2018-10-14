const result = getResult([10, 15, 3, 7], 17);

function getResult(numbers, sum) {
  return numbers.some((number, index) => {
    let difference = sum - number,
    	updatedNumbers = numbers;
        
    updatedNumbers.splice(index, 1);
    return updatedNumbers.includes(difference);
  });
}

$("#result").html(result.toString());