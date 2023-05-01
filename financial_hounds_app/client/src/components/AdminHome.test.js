import React from 'react';
import AdminHome from '../components/AdminHome';
import renderer from 'react-test-renderer';

test("Admin Home Snapshot Test", ()=> {
    const component = renderer.create(
        <AdminHome />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});