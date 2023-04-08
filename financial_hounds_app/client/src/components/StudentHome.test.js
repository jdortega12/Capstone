import React from 'react';
import StudentHome from '../components/StudentHome';
import renderer from 'react-test-renderer';

test("Student Home Snapshot Test", ()=> {
    const component = renderer.create(
        <StudentHome />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});