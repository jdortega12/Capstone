import React from 'react';
import ViewBudget from '../components/ViewBudget';
import renderer from 'react-test-renderer';

test("View Budget Snapshot Test", ()=> {
    const component = renderer.create(
        <ViewBudget />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});