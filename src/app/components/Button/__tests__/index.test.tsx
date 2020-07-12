import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Button from '..';

describe('Button', () => {
    const props = {
        title: 'Title',
    };
    test('should render correctly', () => {
        const component = renderer.create(<Button {...props} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
