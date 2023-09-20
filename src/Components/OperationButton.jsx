import styles from './Styles.module.css'

const OperationButton = (props) => {

    const expressions = /\+|\-|\*|\/| /;
    const lastNumber = props.counts[props.counts.length -1];
    const checkExpressions = () => {
        if (!expressions.test(lastNumber))
            props.calculation(props.counts + props.expression)
    }

    return (
        <button className={styles.operationButton} onClick={checkExpressions} >
            {props.expression}
        </button>
    )
}

export default OperationButton;