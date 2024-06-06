// components/ThemeToggle.js
import React from "react";
import styled from "styled-components";

const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.switchBg};
    transition: 0.4s;
    border-radius: 30px;

    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: ${({ theme }) => theme.sliderBg};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.switchBgChecked};
  }

  input:checked + .slider:before {
    transform: translateX(30px);
    background-color: ${({ theme }) => theme.sliderBgChecked};
  }
`;

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <Switch onClick={toggleTheme}>
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <span className="slider"></span>
    </Switch>
  );
};

export default ThemeToggle;
