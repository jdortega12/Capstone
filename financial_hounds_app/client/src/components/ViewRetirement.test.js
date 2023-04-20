import React from 'react';
import ViewRetirement from '../components/ViewRetirement';
import renderer from 'react-test-renderer';

test("View Retirement Snapshot Test", ()=> {
    const component = renderer.create(
        <ViewRetirement />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});