// Dependencies
import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from "styled-components";

// Component
const WaddlLabel = styled.p`
    font-size: 15px;
    font-weight: 600;
    border-bottom: 3px solid rgba(51,51,51,0.2);
    color: #333;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 0;
    padding-bottom: 8px;
    width: max-content;
`;

WaddlLabel.propTypes = {
    children: PropTypes.node
};

export default WaddlLabel;
