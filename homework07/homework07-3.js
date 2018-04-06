;(function(){
	window.myUtils = {

	min: function (arr) {
         let array = arr.concat();
		 array.sort(fn);
		 return array[0];
        
		 function fn(num1, num2) {
			 if (num1 > num2) {
				 return 1;
			 } else if (num1 < num2) {
				 return -1;
			 } else {
				 return 0;
			 }
         }
	 },

	 max: function (arr) {
          let array = arr.concat();
		  array.sort(fn);
		  return array[array.length-1];
         
		  function fn(num1,num2) {
			 if (num1 > num2) {
				 return 1;
			 } else if (num1 < num2) {
				 return -1;
			 } else {
				 return 0;
			 }
		  }
     },

	average: function (arr) {
		let sum = 0;
        let avg;
        
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}	
        
        avg = sum / arr.length;
        
		return Math.round(avg * 100) / 100;
	},

	cloneArray: function (arr) {
		newArray = arr.concat();
		return newArray;
	}

	};
}());