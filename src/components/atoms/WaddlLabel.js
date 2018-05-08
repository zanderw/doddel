// Dependencies
import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from "styled-components";

// Component
const WaddlLabel = styled.p`
    font-size: 14px;
    color: #333;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 0;
`;

WaddlLabel.propTypes = {
    children: PropTypes.node
};

export default WaddlLabel;
