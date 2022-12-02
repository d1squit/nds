document.querySelector('input').addEventListener('input', () => {
	let value = document.querySelector('input').value.replace(',', '.');

	if (value == '') {
		document.querySelector('.result').textContent = '';
		document.querySelector('.result-with').textContent = '';
	}

	if (!value) return;
	else value = parseFloat(value);
	

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
	document.querySelector('.result-with').textContent = +(value / 1.2).toFixed(15);
});