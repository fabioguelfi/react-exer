import React from 'react';
import { bindActionCreators } from 'redux';
import { inc, dec, stepChanged } from './counterActions';
import { connect } from 'react-redux';

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged} value={props.counter.step} type='number'/>
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>INC</button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps =
    dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);    