import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import {updateLog} from '../../actions/logActions';
import {connect} from 'react-redux';


const EditLogModal = ({ current, updateLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
            updateLog({
                id : current.id,
                message : message,
                attention : attention,
                tech : tech
            })
            // Clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
            M.toast({ html: 'Data updated successfully'});
            setTimeout(()=>{
                window.location.reload();
            },1000)
        }
    };

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <select
                            name='tech'
                            value={tech}
                            className='browser-default'
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value='' disabled>
                                Select Technician
              </option>
                            <option value="John Doe">John Doe</option>
                            <option value="Ram Doe">Ram Doe</option>
                            <option value="Bob Doe">Bob Doe</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input
                                    type='checkbox'
                                    className='filled-in'
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    onClick={onSubmit}
                    className='modal-close waves-effect blue waves-light btn'
                >
                    Enter
        </a>
            </div>
        </div>
    );
};

const modalStyle = {
    width: '75%',
    height: '75%'
};

EditLogModal.propTypes = {
    current: PropTypes.object
};

const mapStateToProps = (state)=> {
    return {current : state.log.current}
}

export default connect(mapStateToProps,{
    updateLog
})(EditLogModal);