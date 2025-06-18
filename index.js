// prompt user for flavors
const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavArray = convertStringToArray(userInputString);

/**
 * @param {string} commaSeparatedFlavors
 * @returns {array[]} the string converted into an array of flavors
 */
function convertStringToArray(commaSeparatedFlavors) {
  // Split the string of flavors into an array of strings.
  const array = commaSeparatedFlavors.split(",");

  const flavors = [];
  for (const arr of array) {
    flavors.push(arr);
  }
  return flavors;
}
