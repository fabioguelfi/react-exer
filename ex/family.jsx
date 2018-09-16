import React from 'react'
import { childrenWithProps } from '../utills/react.util';

export default props => (
    <div>
        <h1>Familia</h1>
        {
           childrenWithProps(props)
        }
    </div>
)