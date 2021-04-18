import styled from 'styled-components';

const StyledListItem = styled.li(
  ({checked}) => `
  min-width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  span {
    text-decoration: ${checked ? 'line-through' : 'none'};
    color: ${checked ? 'grey' : 'inherit'};
  }
`,
);


const ToDoListItem = (props) => {
  const {children, checked} = props;
  return <StyledListItem checked={checked}>{children}</StyledListItem>;
};

export default ToDoListItem;