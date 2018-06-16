// Dependencies
import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from "styled-components";

// Component
const WaddlCardLink = styled.a`
    display: block;
    text-decoration: none;
    
    .card {
    border: none;
    display: inline-block;
    width: 100%;
    border-radius: 10px;
      margin-bottom: 20px;
      padding: 5px;
       background: rgba(51,51,51, .05);
    }
    
    .card-body {
     padding: 10px 5px;
       border-bottom-left-radius: 10px;
         border-bottom-right-radius: 10px;
     }
    
    .card-text {
        font-size: 12px;
        padding-bottom: 5px;
        margin-bottom: 0;
        color: #333;
    }
    
    .badge {
        font-size: 11px;
        padding: 3px 6px;
    }
    
    
    :hover {
        .card-img-top {
        opacity: 0.8;
       
        }
        
        .card {
        background: rgba(51,51,51, .1);
        }
       
    }
`;

WaddlCardLink.propTypes = {
    children: PropTypes.node
};

export default WaddlCardLink;
