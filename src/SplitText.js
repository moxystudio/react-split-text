import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const SplitText = ({ children, className, separator, ...rest }) => {
    const words = children.split(separator);

    return words.map((word, index) => {
        const withWord = word !== '';
        const withSeparator = index !== words.length - 1;
        const shouldRender = withWord || withSeparator;

        return (
            shouldRender && <span
                key={ `word-${index}` }
                className={ classNames('react-split-text', className) }
                { ...rest }>
                { withWord && word }
                { withSeparator && separator }
            </span>
        );
    });
};

SplitText.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    separator: PropTypes.string,
};

SplitText.defaultProps = {
    separator: ' ',
};

export default SplitText;
