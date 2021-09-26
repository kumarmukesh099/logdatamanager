import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const ondelete = () => {
    deleteTech(id);
    M.toast({html : `${firstName} ${lastName} Tech deleted successfully`});
    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={ondelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
};

export default connect(null, { deleteTech })(TechItem);