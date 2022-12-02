document.querySelector('input').addEventListener('input', () => {
	let value = parseFloat(document.querySelector('input').value);
	if (!value) return;

	let increment = 0.01;
	let flag = false;

	while (+(value / 1.2).toFixed(15) != (value / 1.2).toFixed(2)) {
		if (flag) value += increment;
		else value -= increment;
		
		flag = !flag;
		value = parseFloat(value.toFixed(2));
		increment += 0.01;
	}

	document.querySelector('.result').textContent = value;
});