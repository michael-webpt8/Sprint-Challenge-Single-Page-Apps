import React from 'react';
import {Tab, Menu, Icon} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  return (
    <Nav justify variant='tabs' defaultActiveKey='/'>
      <Nav.Item>
        <NavLink to='/'>Home Page</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/characters'>Characters</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/locations'>Locations</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/episodes'>Episodes</NavLink>
      </Nav.Item>
    </Nav>
  );
}
