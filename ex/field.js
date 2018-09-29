import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldActions';
class Field extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.key2}</h1>
                <label>{this.props.value}</label><br/> 
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.field.value,
        key2: state.key2
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);