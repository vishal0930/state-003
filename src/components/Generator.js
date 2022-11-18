import React, { useState } from 'react';

const Generator = () => {

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState("8");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  
  const numbers = '0123456789';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const specialCharacters = "!+%&/()=?#{[]}@*$";


  const handleGeneratePassword = () => {
    let charList = ""

    if(includeUppercase){
      charList = charList + upperCaseLetters;
    }

    if(includeLowercase){
      charList = charList + lowerCaseLetters;
    }

    if(includeNumbers){
      charList = charList + numbers;
    }

    if(includeSymbols){
      charList = charList + specialCharacters;
    }

    setPassword(createPassword(charList))
  }

  const createPassword = (charList) =>{
    let password = ""

    const charListLength = charList.length;

    for(let i=0; i<passwordLength; i++){
      const charIndex = Math.round(Math.random() * charListLength);
      password = password + charList.charAt(charIndex)
    }
    return password
  }

  return (
    <div className="main-container">
      <div className="main-item">
        <div className="heading">
          <h1>Password Generator</h1>
        </div>
        <div className="input-item">
          <div className='main-input'>
            <input type="text" value={password} disabled />
          </div>
        
        </div>

        <div className='select-div'>
          <div className='select-text'>
            <span>Select Password length</span>
          </div>
          <div className='select-element'>
            <select onChange={(e)=>setPasswordLength(e.target.value)}>
              <option defaultValue="8">8</option>
              <option defaultValue="9">9</option>
              <option defaultValue="10">10</option>
              <option defaultValue="11">11</option>
              <option defaultValue="12">12</option>
              <option defaultValue="13">13</option>
              <option defaultValue="14">14</option>
              <option defaultValue="15">15</option>
            </select>
          </div>
        </div>

        <div className='checkbox-item'>
          <div>
            <input type='checkbox' checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)}/>
            <label>Include uppercase letters</label>
          </div>
          <div>
            <input type='checkbox' checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)}/>
            <label>Include lowercase letters</label>
          </div>
          <div>
            <input type='checkbox' checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}/>
            <label>Include numbers</label>
          </div>
          <div>
            <input type='checkbox' checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
            <label>Include symbols</label>
          </div>
        </div>

        <div className='submit-button'>
          <button onClick={handleGeneratePassword}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default Generator;
