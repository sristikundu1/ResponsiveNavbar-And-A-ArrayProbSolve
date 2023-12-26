function find_indices(array,number){
    // store the first number of the list
    var first_index = 0;  
    
     // store the last number of the list
    var last_index = array.length -1;

    for(let i = first_index; i < last_index; i++){
    //   calculate the sum 
           var sum = array[first_index] + array[last_index];
        //    check if the sum and given number is equal or not 
            if (sum === number){
                return [first_index,last_index];
            }
            // move the first index from left to right when sum is less then given number 
            else if(sum < number){
                first_index++;
            }
            // move the last index backward from right to left when sum is greater then given number 
            else{
                last_index--;
            }
       
    }
    // show message if no such pair number is found in the list 
    return "there are no such numbers in the list"

}


// given array 
var arr = [4,7,11,14,20,18]
// given number 
num = 18;



// call the function 
const result = find_indices(arr,num);
console.log(result);

