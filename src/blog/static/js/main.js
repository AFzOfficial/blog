document.addEventListener('DOMContentLoaded', function() {
	function getCurrentYear() {
		return new Date().getFullYear();
	}

	document.getElementById('currentYear').textContent = getCurrentYear();
});
