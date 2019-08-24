import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

const Textarea = (props) => {
    const { children } = props;
    const [ taMessage, setTaMessage ] = useState('');
    return (
        <div className={styles.tawrapper}>
            <input
                className={styles.ta} 
                type="text"
                name="inputMessage"
                value={taMessage}
                onChange={(event) => setTaMessage(event.target.value)}
            />
            <div className={styles.tamessage}>
                Your message is: {taMessage}
            </div>
        </div>
    );
};

Textarea.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Textarea;
