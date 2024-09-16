/*const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.documentElement.style.setProperty('--background', 'red');
})*/


const checkbox = document.getElementById("checkbox");
const checkboxResp = document.getElementById("checkboxresp");

// Function to update the background color based on checkbox state
const updateBackgroundColor = () => {
    if(window.innerWidth > 991){
		if (checkbox.checked) {
			document.documentElement.style.setProperty('--textColor', '#FFFFFF');
			document.documentElement.style.setProperty('--textColorLight', '#B0B0B0');
			document.documentElement.style.setProperty('--textColorDark', '#E0E0E0');
			document.documentElement.style.setProperty('--background', '#001F3F');
			document.documentElement.style.setProperty('--backgroundLight', '#1F1F1F');
			document.documentElement.style.setProperty('--navbarColor', '#7001FF');
		} else {
			document.documentElement.style.setProperty('--textColor', '#000000');
			document.documentElement.style.setProperty('--textColorLight', '#818992');
			document.documentElement.style.setProperty('--textColorDark', '#333');
			document.documentElement.style.setProperty('--background', '#ffffff');
			document.documentElement.style.setProperty('--backgroundLight', '#e2e2e2');
			document.documentElement.style.setProperty('--navbarColor', '#7001FF');
		}
	}
	else {
		if (checkboxResp.checked) {
			document.documentElement.style.setProperty('--textColor', '#FFFFFF');
			document.documentElement.style.setProperty('--textColorLight', '#B0B0B0');
			document.documentElement.style.setProperty('--textColorDark', '#E0E0E0');
			document.documentElement.style.setProperty('--background', '#001F3F');
			document.documentElement.style.setProperty('--backgroundLight', '#1F1F1F');
			document.documentElement.style.setProperty('--navbarColor', '#7001FF');
		} else {
			document.documentElement.style.setProperty('--textColor', '#000000');
			document.documentElement.style.setProperty('--textColorLight', '#818992');
			document.documentElement.style.setProperty('--textColorDark', '#333');
			document.documentElement.style.setProperty('--background', '#ffffff');
			document.documentElement.style.setProperty('--backgroundLight', '#e2e2e2');
			document.documentElement.style.setProperty('--navbarColor', '#7001FF');
		}
	}
};

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set the checkbox to be checked on page load
checkbox.checked = prefersDarkScheme;
checkboxResp.checked = prefersDarkScheme;

// Update the background color based on the initial checkbox state
updateBackgroundColor();

// Add event listener to change background color when checkbox state changes
checkbox.addEventListener("change", updateBackgroundColor);
checkboxResp.addEventListener("change", updateBackgroundColor);

