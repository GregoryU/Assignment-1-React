import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = (props) => {
    const { children } = props;
    const [ inputMessage, setInputMessage ] = useState('');
    return (
        <div className="inputwrapper">
            <div className="inputcount">
                <input
                    className={styles.card} 
                    type="text"
                    name="inputMessage"
                    value={inputMessage}
                    onChange={(event) => setInputMessage(event.target.value)}
                />
                <div>
                    Your message character count is: {inputMessage.length}
                </div>
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
