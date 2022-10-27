function maxSubarray(arr: number[]): number{
    let arrCopy = [...arr]
    while(arrCopy[0] <= 0){
      arrCopy.shift()
    }
    if(arrCopy.length === 0){
        return 0
    }
    let maxSoFar = arrCopy[0]
    for(let i=0; i< arrCopy.length; i++){
      if(arrCopy[i] > 0){
        let shortenedArray = arrCopy.slice(i)
        let runningTotal = 0
        for(let num of shortenedArray){
          runningTotal += num
          if(runningTotal > maxSoFar){
            maxSoFar = runningTotal
          }
        }
      }
    }
    return maxSoFar
  }

  export default maxSubarray