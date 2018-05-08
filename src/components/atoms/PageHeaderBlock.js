// Dependencies
import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from "styled-components";

// Component
const PageHeaderBlock = styled.div`
    background: #FA4DAA;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    
    > p {
        color: #fff;
        margin: 0 auto;
    }
`;

PageHeaderBlock.propTypes = {
    children: PropTypes.node
};

export default PageHeaderBlock;
