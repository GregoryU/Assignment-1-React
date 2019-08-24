import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
    const { children, color, handleClick } = props;
    return (
        <button
            type="button"
            className={`${styles.button} ${styles[color]}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    handleClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Button;
