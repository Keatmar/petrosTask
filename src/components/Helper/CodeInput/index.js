import React, { useState, useEffect, useRef } from 'react';
import style from './styles';

const CodeInput = (props) => {
  const classes = style();

  const [verificationCode, setVerificationCode] = useState({
    value: '000000',
    completed: false
  });
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const [input4, setInput4] = useState(null);
  const [input5, setInput5] = useState(null);
  const [input6, setInput6] = useState(null);
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();
  const input6Ref = useRef();

  useEffect(() => {
    if (input1 && input2 && input3 && input3 && input4 && input5 && input6) {
      props.setVerificationCode((prev) => ({ ...prev, value: verificationCode.value, completed: true }));
    } else {
      props.setVerificationCode((prev) => ({ ...prev, completed: false }));
    }
  }, [input1, input2, input3, input4, input5, input6]);

  function handleVerificationCode(element) {
    let temp = verificationCode.value;
    const value = element.currentTarget.value.charAt(element.currentTarget.value.length - 1);
    if (!isNaN(value)) {
      if (element.currentTarget.id == '1') {
        if (value == '') {
          setInput1(null);
        } else {
          temp = temp.replaceAt(0, value);
          setInput1(value);
          input2Ref.current.focus();
        }
      } else if (element.currentTarget.id == '2') {
        if (value == '') setInput2(null);
        else {
          temp = temp.replaceAt(1, value);
          setInput2(value);
          input3Ref.current.focus();
        }
      } else if (element.currentTarget.id == '3') {
        if (value == '') setInput3(null);
        else {
          temp = temp.replaceAt(2, value);
          setInput3(value);
          input4Ref.current.focus();
        }
      } else if (element.currentTarget.id == '4') {
        if (value == '') setInput4(null);
        else {
          temp = temp.replaceAt(3, value);
          setInput4(value);
          input5Ref.current.focus();
        }
      } else if (element.currentTarget.id == '5') {
        if (value == '') setInput5(null);
        else {
          temp = temp.replaceAt(4, value);
          setInput5(value);
          input6Ref.current.focus();
        }
      } else if (element.currentTarget.id == '6') {
        if (value == '') setInput6(null);
        else {
          temp = temp.replaceAt(5, value);
          setInput6(value);
        }
      }
      setVerificationCode((prev) => ({ ...prev, value: temp }));
    }
  }

  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };

  return (
    <div className={classes.codeInput}>
      <input
        value={input1 ? input1 : ''}
        id="1"
        autoComplete="off"
        data-valid="true"
        placeholder="0"
        onChange={handleVerificationCode}
      />
      <input
        value={input2 ? input2 : ''}
        id="2"
        type="number"
        min="0"
        ref={input2Ref}
        max="9"
        autoComplete="off"
        data-valid="true"
        placeholder="0"
        onChange={handleVerificationCode}
      />
      <input
        ref={input3Ref}
        value={input3 ? input3 : ''}
        id="3"
        type="number"
        min="0"
        max="9"
        autoComplete="off"
        data-valid="true"
        placeholder="0"
        onChange={handleVerificationCode}
      />
      <input
        ref={input4Ref}
        value={input4 ? input4 : ''}
        onChange={handleVerificationCode}
        id="4"
        type="number"
        min="0"
        max="9"
        autoComplete="off"
        data-valid="true"
        placeholder="0"
      />
      <input
        ref={input5Ref}
        value={input5 ? input5 : ''}
        onChange={handleVerificationCode}
        id="5"
        type="number"
        min="0"
        max="9"
        autoComplete="off"
        data-valid="true"
        placeholder="0"
      />
      <input
        ref={input6Ref}
        value={input6 ? input6 : ''}
        id="6"
        onChange={handleVerificationCode}
        type="number"
        min="0"
        max="9"
        autoComplete="off"
        data-valid="true"
        placeholder="0"
      />
    </div>
  );
};

export default CodeInput;
