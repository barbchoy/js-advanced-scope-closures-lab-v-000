function produceDrivingRange(blockRange){
  return function(arg1, arg2){
    let newarg1 = arg1.replace(/[^0-9]/g, '');
    let newarg2 = arg2.replace(/[^0-9]/g, '');
    let range = Math.abs(newarg1 - newarg2);
    let rangeDifference = blockRange - range;
    if (rangeDifference < 0){
      return `${Math.abs(rangeDifference)} blocks out of range`
    } else {
      return `within range by ${rangeDifference}`;
    }
  }
}

function produceTipCalculator(percent){
  return function (amount){
    return amount*percent;
  }
}

function createDriver(){
  let classId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++classId;
    }
  }
}
