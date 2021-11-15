import React from 'react';
import styled, { css } from 'styled-components';
import { BiCheck} from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import '../style/Line_style.css';
import { useTodoDispatch } from './Context';

const Remove = styled.div`
  display: flex;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  margin-left:3vw;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  padding-top: 0.5vw;
  width:70vw;
  padding-bottom: 1vw;
  margin-top:1vh;
  position:relative;
  left:2vw;
  margin-right:5vw;
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
  flex-basis: 55vw;
  font-size: 20px;
  text-align: left;
  word-break:break-all;
  color: #495057;
  padding-bottom:1vh;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function TodoItem({ id, text, done}) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle} >{done && <BiCheck /> }</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <RiDeleteBin6Line />
      </Remove>
      <hr className="Line3"/>
    </TodoItemBlock>
     );
}
export default React.memo(TodoItem);