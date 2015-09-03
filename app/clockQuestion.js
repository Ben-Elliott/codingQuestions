//Given a time, calculate the angle between the hour and the minute hands
//console.log(clock(**insert the hour**, **insert the minutes**)).  Army time is not allowed :P
console.log(clock(2, 10.54));

function clock(hour, minute) {

var solution;
//if there are 12 hours around a clock, then 30 degrees constitutes an hour angle
//we are assuming currently that midnight or noon is at a position of 360 degrees or zero
var hourAngle = (30 * hour) + ((minute/60)*30);
//there are 60*60 minutes in the circle of the clock
//need to do 360 degrees times the minutes entered over total minutes
var minuteAngle = 360 * (minute/60);
//need to take out 360 if viable, using modulus
hourAngle = hourAngle % 360;
minuteAngle = minuteAngle % 360;

if (hourAngle < minuteAngle) {
	solution = minuteAngle - hourAngle;
}
else {
	solution = hourAngle - minuteAngle; 
}
return solution;	
}