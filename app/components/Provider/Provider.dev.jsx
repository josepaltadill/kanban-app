import AltContainer from 'alt-container';
import chromeDebug from 'chrome-debug';
import React from 'react';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

chromeDebug(alt);

React.Perf = require('react-addons-perf');

export default ({children}) =>
    <AltContainer flux={alt}>
        {children}
    </AltContainer>
