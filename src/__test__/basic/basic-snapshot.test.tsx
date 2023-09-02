import Link from '../../components/Link';
import RandomNumber from '../../components/RandomNumber';

import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <Link page="http://www.facebook.com">
                Facebook
            </Link>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});




it('renders correctly with inlineSnapshot', () => {
    const tree = renderer
        .create(
            <Link page="http://www.facebook.com">
                Facebook
            </Link>
        )
        .toJSON();
    expect(tree).toMatchInlineSnapshot(`
<a
  href="http://www.facebook.com"
>
  Facebook
</a>
`);
});
