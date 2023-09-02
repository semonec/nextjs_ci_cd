import HotPinkButton from '../../components/HotPinkButton';
import RandomNumber from '../../components/RandomNumber';

import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <HotPinkButton />
    )
        .toJSON();
    expect(tree).toMatchSnapshot();
});