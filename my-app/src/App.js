import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [sum, setSum] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/add', {
        num1,
        num2,
      });

      setSum(response.data.sum);
    } catch (error) {
      console.error('Error calculating sum:', error);
    }
  }
  

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="number" value={num1} onInput={e => setNum1(e.target.value)}/>
          <input type="number" value={num2} onInput={e => setNum2(e.target.value)}/>
          <input type="submit" />
        </form>

        {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
}

export default App;
