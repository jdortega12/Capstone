import React from 'react';
import Login from '../components/Login';
import renderer from 'react-test-renderer';

test("Login Snapshot Test", ()=> {
    const component = renderer.create(
        <Login />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});