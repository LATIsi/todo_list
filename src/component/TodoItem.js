import React from 'react';
import styled, { css } from 'styled-components';
import { BiCheck} from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5vw;
  width:50vw;
  padding-bottom: 0.5vw;
  position:relative;
  left:2vw;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 3vw;
  height: 6.2vh;
  border-radius: 24px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5vw;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text , Line}) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <BiCheck />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <RiDeleteBin6Line />
      </Remove>
      <hr className="Line3"/>
    </TodoItemBlock>
  );
}
export default TodoItem;