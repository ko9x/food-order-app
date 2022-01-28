import styles from './Input.module.css';

const Input = props => {
    return <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* ...props.input will add all the key-value pairs inside the props.input object to the input element. This makes is really easy to use this input for any setup */}
        <input {...props.input}/>
    </div>
};

export default Input;
