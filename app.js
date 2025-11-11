// helper functions
function showResult(id, text) {
document.getElementById(id).textContent = text;
}
function showError(id, text) {
document.getElementById(id).textContent = text;
}
function clearMessages(...ids) {
ids.forEach(i => showError(i, ''));
}
// TRIANGLE
document.getElementById('calcTriangle').addEventListener('click', function(){
const a = parseFloat(document.getElementById('a').value);
const b = parseFloat(document.getElementById('b').value);
const c = parseFloat(document.getElementById('c').value);
clearMessages('triangleError');
showResult('triangleResult', '');
if (!isFinite(a) || !isFinite(b) || !isFinite(c)) {
showError('triangleError', 'Please enter valid numbers for all sides.');
return;
}
if (a <= 0 || b <= 0 || c <= 0) {
showError('triangleError', 'All sides must be positive numbers.');
return;
}
if (a + b <= c || a + c <= b || b + c <= a) {
showError('triangleError', 'Invalid triangle (triangle inequality violated).');
return;
}
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
showResult('triangleResult', 'Area: ' + area.toFixed(2) + ' sq. units');
});
// RECTANGLE
document.getElementById('calcRectangle').addEventListener('click',
function(){
const l = parseFloat(document.getElementById('length').value);
const w = parseFloat(document.getElementById('width').value);
clearMessages('rectangleError');
showResult('rectangleResult', '');
if (!isFinite(l) || !isFinite(w)) {
showError('rectangleError', 'Please enter valid numbers for length and width.');
return;
}
if (l <= 0 || w <= 0) {
showError('rectangleError', 'Length and width must be positive numbers.');
return;
}
const area = l * w;
showResult('rectangleResult', 'Area: ' + area.toFixed(2) + ' sq. units');
});
// CIRCLE
document.getElementById('calcCircle').addEventListener('click', function(){
const r = parseFloat(document.getElementById('radius').value);
clearMessages('circleError');
showResult('circleResult', '');
if (!isFinite(r)) {
showError('circleError', 'Please enter a valid numeric radius.');
return;
}
if (r <= 0) {
showError('circleError', 'Radius must be a positive number.');
return;
}
const area = Math.PI * r * r;
showResult('circleResult', 'Area: ' + area.toFixed(2) + ' sq. units');
});
// Allow Enter key to trigger
['a','b','c'].forEach(id => {
document.getElementById(id).addEventListener('keydown', e => {
if (e.key === 'Enter') document.getElementById('calcTriangle').click();
});
});
['length','width'].forEach(id => {
document.getElementById(id).addEventListener('keydown', e => {
if (e.key === 'Enter') document.getElementById('calcRectangle').click();
});
});
document.getElementById('radius').addEventListener('keydown', e => {
if (e.key === 'Enter') document.getElementById('calcCircle').click();
});