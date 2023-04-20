import React from 'react';
import ViewEmergency from '../components/ViewEmergency';
import renderer from 'react-test-renderer';

test("View Emergency Snapshot Test", ()=> {
    const component = renderer.create(
        <ViewEmergency />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});