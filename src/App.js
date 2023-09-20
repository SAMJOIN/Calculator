import { useState } from 'react';
import './App.css';
import Numbers from './Components/Numbers';
import OperationButton from './Components/OperationButton';
import styles from './Components/Styles.module.css'

function App() {

  const [result, setResult] = useState('0');
  const [counts, setCounts] = useState('');

  function calculation(input) {
    setCounts(input);
    setResult(eval(counts));
  }


  return (
    <div className={styles.app}>
      <div className={styles.inputBox}>
        <div className={styles.counts}>
          {counts}
        </div>
        <div className={styles.result}>
          {result}
        </div>
      </div>

      <div className={styles.container}>
        <Numbers setCounts={setCounts} counts={counts} />
        <div className={styles.operationBox}>
          <OperationButton expression={'-'} counts={counts} calculation={calculation} />
          <OperationButton expression={'+'} counts={counts} calculation={calculation} />
          <OperationButton expression={'*'} counts={counts} calculation={calculation} />
          <OperationButton expression={'/'} counts={counts} calculation={calculation} />
          <button className={styles.addButton} onClick={() => {setResult(eval(counts))}}>=</button>
          <button className={styles.addButton} onClick={() => {setCounts(''); setResult('0')}}>AC</button>
        </div>
      </div>
    </div>
  );
}

export default App;
