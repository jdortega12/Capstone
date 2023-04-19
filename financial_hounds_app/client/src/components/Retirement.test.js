import React from 'react';
import Retirement from '../components/Retirement';
import renderer from 'react-test-renderer';

test("Retirement Snapshot Test", ()=> {
    const component = renderer.create(
        <Retirement />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});