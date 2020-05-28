class NameValidator extends Validator {
  constructor(parameters) {
    super(parameters);
  }

  validate = (event) => {
    console.log("NameValidator.validate", event);
    const value = event.target.value;

    super.validateBefore(event);
    console.log("running validation for NameValidator", event);

    console.log("value", value);
    if (/(\w.+\s).+/.test(value)) {
      this.isValid = true;
      console.log("valid name!");
    } else {
      this.isValid = false;
      console.log("not a valid name");
    }
    super.validateAfter(event);
  };
}
