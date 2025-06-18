// prompt user for flavors
const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavArray = convertStringToArray(userInputString);
const flavObj = convertArrayToObject(flavArray);
console.table(flavObj);

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

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {array} arrayOfFlavors
 * @returns {object{}} the array converted into an object of flavors and quantity
 */
function convertArrayToObject(arrayOfFlavors) {
  const froyos = {}; // Create an empty object
  // Loop through array of flavors
  for (const froyo of arrayOfFlavors) {
    // Check if a flavor does NOT exist in object
    if (froyos[froyo] === undefined) {
      // Set the flavor quantity to 1
      froyos[froyo] = 1;
    } else {
      froyos[froyo] += 1; // Increase quantity of flavor key by 1
    }
  }
  return froyos;
}
