class DynamicArray {

  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
    
  }

  read(index) {
    //this.data[0] = 99;
    return this.data[index];
    
  }

  push(val) {
    // Your code here 
    this.length++; 
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === undefined) {
        return this.data[i] = val;
      }
    }
  }


  pop() {
    // Your code here 
    if (this.length > 0) {
      let tempReturn = this.data[this.length - 1];
      this.data[this.length - 1] = undefined;
      this.length--;
      return tempReturn; }
    return undefined;
  }

  shift() {
    // Your code here 
    let tempValue = this.data[0];
    

      if (this.length > 0) {
        this.length--;
        for (let i = 0; i < this.data.length; i++) {
          //console.log(this.data[i]);
          this.data[i] = this.data[i+1];
          //console.log(this.data[i]);
        }
        return tempValue;
      } else {
        return undefined;
      }

    
  }

  unshift(val) {
    // Your code here 

    if (this.length === 0) {
      this.data[0] = val;
    } else {
      for(let i = this.length - 1; i >= 0; i--) {
        if (i === 0) {
          this.data[0] = val;
        } else {
        this.data[i] = this.data[i-1];
        }
      }
    }

    this.length++;
  }

  indexOf(val) {
    // Your code here 
  }

  resize() {
    // Your code here 
  }

}

/*let dynamicArr = new DynamicArray();
dynamicArr.push(1);
dynamicArr.push(2);
dynamicArr.push(3);

dynamicArr.shift();
dynamicArr.shift();

*/
//console.log(dynamicArr.pop());



////////////////////////////////


module.exports = DynamicArray;
