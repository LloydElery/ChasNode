//TODO: Think about how to solve the calculator (first version), build a working version.
//TODO: Test to better the solution. Test a lot so that you know that it still works!

export class Calculator {
  inputs: number[];

  constructor(initialNumbers) {
    this.inputs = initialNumbers;
  }

  // Adds latest numbers
  // Removes them from inputs-array
  // Push new value to array

  /**
   * Kollar om det finns två värden
   * finns det inte två värden så skrivs inputs ut som svar
   */
  add() {
    if (this.inputs.length > 1) {
      const num1 = this.inputs.pop();
      const num2 = this.inputs.pop();

      if (num1 && num2) this.inputs.push(num1 + num2);
    }
  }

  // Multiplies latest numbers
  // Removes them from inputs-array
  // Push new value to array
  multiply() {
    const num1 = this.inputs.pop();
    const num2 = this.inputs.pop();

    if (num1 && num2) this.inputs.push(num1 * num2);
  }

  // Subtract latest numbers
  // Removes them from inputs-array
  // Push new value to array
  subtract() {
    const num1 = this.inputs.pop();
    const num2 = this.inputs.pop();

    if (num1 && num2) this.inputs.push(num1 - num2);
  }

  // Divide two latest numbers
  // Removes them from inputs-array
  // Push new value to array
  divide() {
    const num1 = this.inputs.pop();
    const num2 = this.inputs.pop();

    if (num1 && num2) this.inputs.push(num1 / num2);
  }

  // Add a number to the numers-array
  input(input: number) {
    return this.inputs.push(input);
  }

  // Return latest response
  latest() {
    return this.peek();
  }

  // Return all numbers as array
  all() {
    return this.inputs;
  }

  /**
   * Peek = är som en pop men tittar enbart på värdet. (Pop tar bort) (Push lägger till)
   * @returns a preview of the ...
   */

  private peek() {
    return this.inputs[this.inputs.length - 1];
  }
}
