function ConvertHandler() {
	this.getNum = function(input) {
		let result = input.match(/[.\d\/]+/g) || ["1"];
    const nums= result[0].split("/");
    if(nums){
    if (nums.length >2){
      return undefined;
    } 
    else{
    let num1= nums[0];
    let num2= nums[1] || 1;

    if (isNaN(num1) || isNaN(num2))
    {
      return undefined;
    }

    return parseFloat(num1)/ parseFloat(num2);
    }
    } 

		return result;
	};

	this.getUnit = function(input) {
		let result = input.match(/[a-zA-Z]+/g)[0].toLowerCase();
    switch(result){
      case "km":
        return "km";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "mi":
        return "mi";
      case "l":
        return "L";
      case "kg":
        return "kg";
      default: 
        return undefined;
    }

		return result;
	};

	this.getReturnUnit = function(initUnit) {
		let result= initUnit.toLowerCase();
    switch(result){
      case "km":
        return "mi";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "l":
        return "gal";
      case "kg":
        return "lbs";
      default: 
        return undefined;
    }
		return result;
	};

	this.spellOutUnit = function(initUnit) {
		let result=initUnit.toLowerCase();
    switch(result){
      case "km":
        return "kilometers";
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "mi":
        return "miles";
      case "l":
        return "liters";
      case "kg":
        return "kilograms";
      default: 
        return undefined;
    }
		return result;
	};

	this.convert = function(initNum, initUnit) {
		const galToL = 3.78541;
		const lbsToKg = 0.453592;
		const miToKm = 1.60934;
		let unit=initUnit.toLowerCase();
     switch(unit){
      case "km":
        return  result=Math.round((initNum / miToKm)*100000)/100000;
      case "gal":
        return  result=Math.round((initNum * galToL)*100000)/100000;
      case "lbs":
        return  result=Math.round((initNum * lbsToKg)*100000)/100000;
      case "mi":
        return  result=Math.round((initNum * miToKm)*100000)/100000;
      case "l":
        return  result=Math.round((initNum / galToL)*100000)/100000;
      case "kg":
        return  result=Math.round((initNum / lbsToKg)*100000)/100000;
      default: 
        return undefined;
    }
    
    return result;
	  
	};

	this.getString = function(initNum, initUnit, returnNum, returnUnit) {
		return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
	};
}

module.exports = ConvertHandler;
