import React from 'react';
import Budget from '../components/Budget';
import renderer from 'react-test-renderer';

test("Budget Snapshot Test", ()=> {
    const component = renderer.create(
        <Budget />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});