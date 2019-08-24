import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = (props) => {
    const { children } = props;
    const [ inputMessage, setInputMessage ] = useState('');
    return (
        <div className={styles.inputwrapper}>
            <input
                className={styles.input} 
                type="text"
                name="inputMessage"
                value={inputMessage}
                onChange={(event) => setInputMessage(event.target.value)}
            />
            <div className={styles.inputcount}>
                Your message character count is: {inputMessage.length}
            </div>
        </div>
    );
};

Input.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Input;
