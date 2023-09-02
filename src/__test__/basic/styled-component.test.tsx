import StyledComponentBtn from '../../components/StyledComponentBtn';

import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <StyledComponentBtn />
    )
        .toJSON();
    expect(tree).toMatchSnapshot();
});