import React from 'react';
import { render } from '@testing-library/react';
import { SplitText } from '../src/SplitText';

const renderWithProps = (props = {}) => render(<SplitText { ...props }>Hello world!</SplitText>);

describe('SplitText Component', () => {
    it('should render correctly', () => {
        const { asFragment } = renderWithProps();

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly with separator', () => {
        const { asFragment } = renderWithProps({ separator: '-' });

        expect(asFragment()).toMatchSnapshot();
    });
});
