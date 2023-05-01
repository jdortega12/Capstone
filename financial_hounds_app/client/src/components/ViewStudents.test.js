import React from 'react';
import ViewStudents from '../components/ViewStudents';
import renderer from 'react-test-renderer';

test("View Students Snapshot Test", ()=> {
    const component = renderer.create(
        <ViewStudents />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});