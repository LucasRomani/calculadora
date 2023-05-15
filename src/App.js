import {Container, Content, Row} from './style';
import Input from './components/Input';
import Button from './components/Button'
import React, {useState} from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const addNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);// se o prev for iguar a 0 não colocar nada('') 
    //senão coloca o prev
  };

  const inputClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const sumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')  
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }  
  }
  const minusNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')  
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }  
  }

  const splitNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const multiplyNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber != '0' && operation != '' && currentNumber != '0') {
      switch(operation) {
        case '+':
          sumNumber();
          break;
        case '-':
          minusNumber();
          break;
        case '/':
          splitNumber();
          break;
        case '*':
          multiplyNumber();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="0" onClick={() => addNumber('0')}/>
          <Button label="/" onClick={splitNumber}/>
          <Button label="C" onClick={() => inputClear('')}/>
          <Button label="*" onClick={multiplyNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => addNumber('7')}/>
          <Button label="8" onClick={() => addNumber('8')}/>
          <Button label="9" onClick={() => addNumber('9')}/>
          <Button label="-" onClick={minusNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => addNumber('4')}/>
          <Button label="5" onClick={() => addNumber('5')}/>
          <Button label="6" onClick={() => addNumber('6')}/>
          <Button label="+" onClick={sumNumber}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => addNumber('1')}/>
          <Button label="2" onClick={() => addNumber('2')}/>
          <Button label="3" onClick={() => addNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
