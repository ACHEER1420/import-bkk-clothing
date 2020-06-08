import React from 'react';

// Function
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

// Component
import MenuItem from '../menu-item/menu-item.component';

// Style
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory'>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
