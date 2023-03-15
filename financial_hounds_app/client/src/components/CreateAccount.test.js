import React from 'react';
import CreateAccount from '../components/CreateAccount';
import renderer from 'react-test-renderer';

test("Create Account Snapshot Test", ()=> {
    const component = renderer.create(
        <CreateAccount />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});