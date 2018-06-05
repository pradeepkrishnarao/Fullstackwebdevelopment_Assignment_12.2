var doublevalResult = [10,8,12,36].map(function(value,doubleValue){ //doublevalResult object holds the return values of the given input array with map built-in method having value and doubleValue.
        return doubleValue = value * 2; //return doubleValue that is multipied by 2 to double the given input array length for each item value
});
var filtervalResult = doublevalResult.filter(function(value,filterValues){ //filtervalResult object stores the return filterValues to the built-in method having value and filterValues.
    if(value > 20){ //if condition checks for value greater than 20 in function doublevalResult array and returned to filter built-in filter method having value and filterValues.
        return filterValues=value; //return filterValues from function doublevalResult array having value greater than 20.
    }
});
var filtersumResult = filtervalResult.reduce(function(sum,value){ // filtersumResult object stores return values of function filtervalResult built-in reduce method of function sum and value parameters.
        return sum+=value; //filtersumResult object stores the return of sum of the filtered values to the built-in method having sum and value parameters.
});
