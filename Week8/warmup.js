var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubblesort(theArray){
	for(var i = 0; i < a.length; i++){
		for (var j = 0; j < a.length; j++){
			if (a[j] > a[j+1]){
				var temp = theArray[j];
				theArray[j] = theArray[j + 1];
				theArray[j+1] = temp;
			}
		}
	} return theArray;
};

console.log(bubblesort(a))