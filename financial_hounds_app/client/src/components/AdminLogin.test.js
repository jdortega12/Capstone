import React from 'react';
import AdminLogin from '../components/AdminLogin';
import renderer from 'react-test-renderer';

test("Admin Login Snapshot Test", ()=> {
    const component = renderer.create(
        <AdminLogin />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});