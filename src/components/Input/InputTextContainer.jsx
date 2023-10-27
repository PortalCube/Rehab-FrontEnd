import styled from "styled-components";
import PropTypes from "prop-types";
import InputText from "./InputText";

const Input = styled(InputText)`
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
`;

function InputTextContainer({ label, value, onInput, ...props }) {
  return (
    <InputContainer {...props}>
      <Label>{label}</Label>
      <Input value={value} onInput={onInput} />
    </InputContainer>
  );
}

InputTextContainer.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
};

export default InputTextContainer;
