import React from 'react';
import GenericPlanner from '../components/GenericPlanner';
import renderer from 'react-test-renderer';

test("Generic Planner Snapshot Test", ()=> {
    const component = renderer.create(
        <GenericPlanner />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});