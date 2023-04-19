import React from 'react';
import Emergency from '../components/Emergency';
import renderer from 'react-test-renderer';

test("Create Emergency Snapshot Test", ()=> {
    const component = renderer.create(
        <Emergency />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});