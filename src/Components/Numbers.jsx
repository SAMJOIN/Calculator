import styles from './Styles.module.css'

const Numbers = (props) => {

  const nums = Array.from(Array(10).keys()).map(el => <button className={styles.numButton} key={el}
    onClick={(e) => {
      if (props.counts != "0")
        props.setCounts(props.counts + e.target.innerHTML)
      else
        props.setCounts(e.target.innerHTML)
    }}
  >{el}</button>)

  return (
    <div className={styles.numBox}>
      {nums}
    </div>
  );
}

export default Numbers;