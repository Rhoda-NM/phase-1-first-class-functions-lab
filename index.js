
const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0,2);
}
/*let drivers = ['ann', 'joy', 'may', 'bl'];//array.length-1
let x = drivers.slice(drivers.length -2)
console.log(x)*/
/*const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(driversArray.length-2);
}*/
const returnLastTwoDrivers = (drivers) => {
    let n = drivers.length;
    return drivers.slice(n-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(num) {
    return (fare) => fare * num;
}
const fareMultiplier = createFareMultiplier(2);// returns(fare => fare *2)
//console.log(fareMultiplier); returns an anonymous function
function fareDoubler(fare) {
    return fareMultiplier(fare);
}
//console.log(fareDoubler(10));
/*function returna Function() {
    return function() {}
}*/
const trippleFare= createFareMultiplier(3);//(fare => fare *2)
//console.log(fareMultiplier);
function fareTripler(fare) {
    return trippleFare(fare);
}
//console.log(fareTripler(10));
function selectDifferentDrivers(drivers, selectedDrivers) {
    if(selectedDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else {
        return returnLastTwoDrivers(drivers);
    }
    
}
