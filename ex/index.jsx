import React from 'react';
import ReactDOM from 'react-dom';

import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName="guelfi">
       <Member name="Fabio" />
       <Member name="Rodrigo" />
       <Member name="Betyna" />
       <Member name="Ricardo" />
    </Family>, 
document.getElementById('app'));