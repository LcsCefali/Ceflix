import React from 'react';
import { StyledButton } from './styles';

function Button(props) {
  const { href, className, children } = props;

  return (
    <StyledButton href={href} className={className}>
      {children}
    </StyledButton>
  );
}

export default Button;