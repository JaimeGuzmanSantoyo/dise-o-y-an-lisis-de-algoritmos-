function dominants(arr) {
    const result = [];
    let k = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i] && -1000 <= arr[i] && arr[i] <= 1000) {
        result[k] = arr[i];
        k++;
      }
    }
  
  
   
    
  
    return result;
  }
  
  console.log(dominants([1, 21, 4, 7, 5])); // [21, 7]
  console.log(dominants([5, 4, 3, 2, 1])); // [5, 4, 3, 2]