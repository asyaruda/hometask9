function removeElement(array, item) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== item) {
        newArray.push(array[i])
      }
    }
    return newArray
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7]
  const newArray = removeElement(array, 4)
  console.log(newArray)