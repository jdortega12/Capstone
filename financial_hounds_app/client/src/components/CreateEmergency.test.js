import React from 'react';
import CreateEmergency from '../components/CreateEmergency';
import renderer from 'react-test-renderer';

test("Create Emergency Snapshot Test", ()=> {
    const component = renderer.create(
        <CreateEmergency />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});