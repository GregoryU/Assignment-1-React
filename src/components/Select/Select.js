import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

const Select = (props) => {
    const { children } = props;
    const [ language, setLanguage ] = useState('');
    return (
        <div className={styles.selectwrapper}>
            <select
                className={styles.select} 
                name="inputMessage"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
            >
                <option value="">Please select a programming language</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
                <option value="C#">C#</option>
            </select>
            <div className={styles.slectmessage}>
                Your programming language is: {language}
            </div>
        </div>
    );
};

Select.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Select;
