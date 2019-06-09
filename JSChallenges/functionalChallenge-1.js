function toCharCode(string) {
	return string.charCodeAt(0);
};

function fromCharCode(charCode) {
	return String.fromCharCode(charCode)
};

function next(numero) {
	return numero +1;
};

function nextChar(string) {
	return fromCharCode(next(toCharCode(string)))
};