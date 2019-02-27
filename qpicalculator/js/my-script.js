var currUnit;
var currLetter;
var total;

var clickMe = function() {
  ons.notification.alert('oh well. Please work');
};

function concatLetter(let, x)
{
	currLetter = x;
	document.getElementByID('top-input').value = document.getElementByID('top-input').value + "(" + let + " * ";
}

function concatUnit(n)
{
	currUnit = n;
	total = total + (currUnit * currLetter);
	document.getElementByID('top-input').value = document.getElementByID('top-input').value + n ") + ";
}

function sum()
{
	document.getElementByID('bottom-input').value = total;
}