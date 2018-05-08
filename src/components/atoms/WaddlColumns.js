// Dependencies
import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from "styled-components";
import media from '../media'

// Component
const WaddlColumns = styled.div`
    column-count: 5;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
    
      ${media.laptop`
        column-count: 4;
    `};
    
     ${media.tablet`
        column-count: 3;
    `};
    
     ${media.phablet`
        column-count: 2;
    `};
`;

WaddlColumns.propTypes = {
    children: PropTypes.node
};

export default WaddlColumns;
