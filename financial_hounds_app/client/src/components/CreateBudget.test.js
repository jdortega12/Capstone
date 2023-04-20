import React from 'react';
import CreateBudget from '../components/CreateBudget';
import renderer from 'react-test-renderer';

test("Create Budget Snapshot Test", ()=> {
    const component = renderer.create(
        <CreateBudget />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});