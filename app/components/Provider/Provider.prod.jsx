import AltContainer from 'alt-container';
import React from 'react';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

export default ({children}) =>
    <AltContainer flux={alt}>
        {children}
    </AltContainer>
