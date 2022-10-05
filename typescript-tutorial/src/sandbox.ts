// ? Workflow testing...
const character = "mario";

console.log(character);

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
	console.log(input);
});

//Type Aliases
type StringOrNum = string | number;
const id: StringOrNum = 1;
