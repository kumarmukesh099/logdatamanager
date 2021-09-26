import React from 'react';
import AddLogModal from '../logs/AddLogModal';

const AddBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a
                href='#add-log-modal'
                className='btn-floating btn-large blue darken-2 modal-trigger'>
                <i className='large material-icons'>Logs</i>
            </a>
            <ul>
                <li>
                    <a
                        href='#tech-list-modal'
                        className='btn-floating green modal-trigger'>
                        <i className='material-icons'>techs</i>
                    </a>
                </li>
                <li>
                    <a href='#add-tech-modal' className='btn-floating red modal-trigger'>
                        <i className='material-icons'>+</i>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default AddBtn
