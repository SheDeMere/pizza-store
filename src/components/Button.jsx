import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({className, onClick, outline, children}) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline
            })}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default Button;