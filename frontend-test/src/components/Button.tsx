import styled from 'styled-components';

type ButtonProps = {
    width?: string;
    paddingX?: string;
    paddingY?: string;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    hoverColor?: string;
    hoverBackgroundColor?: string;
    onClick?: () => void; 
    children: React.ReactNode;
};

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['width', 'paddingX', 'paddingY', 'color', 'backgroundColor', 'borderColor', 'hoverColor', 'hoverBackgroundColor'].includes(prop),
})<ButtonProps>`
  width: ${(props) => props.width || 'auto'};
  padding-left: ${(props) => props.paddingX || '2rem'};
  padding-right: ${(props) => props.paddingX || '2rem'};
  padding-top: ${(props) => props.paddingY || '1rem'};
  padding-bottom: ${(props) => props.paddingY || '1rem'};
  color: ${(props) => props.color || '#fff'};
  border: 2px solid ${(props) => props.borderColor || '#fff'};
  background-color: ${(props) => props.backgroundColor || '#fff'};
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#ddd'};
    color: ${(props) => (props.hoverColor || '#fff')};
  }
`;

const Button: React.FC<ButtonProps> = ({
  width = 'auto',
  backgroundColor = 'transparent',
  paddingX = '2rem',
  paddingY = '1rem',
  color = '#fff',
  borderColor = '#fff',
  hoverColor = '#000',
  hoverBackgroundColor = '#ddd',
  onClick,
  children,
}) => {
  return (
    <StyledButton
      width={width}
      paddingX={paddingX}
      paddingY={paddingY}
      backgroundColor={backgroundColor}
      color={color}
      borderColor={borderColor}
      hoverColor={hoverColor}
      hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;