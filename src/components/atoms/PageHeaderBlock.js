// Dependencies
import React from "react";
import PropTypes from 'prop-types'
import styled, {css} from "styled-components";

// Component
const PageHeaderBlock = styled.div`
    background: #FA4DAA;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    
    > p {
        color: #fff;
        margin: 0 auto;
    }
    
    a {
    background: rgba(255,255,255,0.5);
    border-radius: 4px;
    position: absolute;
    left: 20px;
    top: 18px;
    padding: 3px;
    line-height: 11px;
    color: #fff !important;
    cursor: pointer;
    }
    
    a:hover {
        background: rgba(255,255,255,0.7);
    }
`;

PageHeaderBlock.propTypes = {
    children: PropTypes.node
};

export default PageHeaderBlock;
