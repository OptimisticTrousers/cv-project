import Input from "../components/ui/Input/input";
import Textarea from "../components/ui/Textarea/Textarea";
/* eslint-disable no-nested-ternary */
const conditionallyRender = (
  submittedComponent,
  inputType,
  value,
  propName,
  type = 'text'
) => {
  const { submitted } = this.state;

  return submitted ? (
    submittedComponent
  ) : inputType === 'input' ? (
    <Input
      value={value}
      handleChange={(event) => this.handleChange(event, propName)}
      type={type}
    />
  ) : inputType === 'textarea' ? (
    <Textarea
      value={value}
      handleChange={(event) => this.handleChange(event, propName)}
    />
  ) : (
    []
  );
};
export default conditionallyRender;
