import React from 'react';
import styled, { css } from 'styled-components';
import { BiCheck} from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import '../style/Line_style.css';
import { useTodoDispatch } from './Context';


const TodoUpdate = styled.div`
  display: flex;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  margin-left:1vw;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
    
      @media screen and (max-width: 750px) {
        font-size: 4vh;
        margin-left:2.5vw;
       }
       
       @media screen and (max-width: 499px) {
        margin-top:1vh;
        font-size: 3vh;
      }
`;

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

      @media screen and (max-width: 750px) {
        margin-left:3vw;
        font-size: 4vh;
    }

    @media screen and (max-width: 499px) {
      margin-top:1vh;
      font-size: 3vh;
    }
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
    ${TodoUpdate} {
      display: initial;
    }
  }
    @media screen and (max-width: 750px) {
      width:100vw;
      height:auto;
      padding-bottom: 1vh;
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

    @media screen and (max-width: 750px) {
      width:7vw;
      height:7vw;
      margin-right:10vw;
      margin-left:2vw;
      margin-top:1vh;
    }

    @media screen and (max-width: 499px) {
      width:8vw;
      height:8vw;
      margin-right:10vw;
      margin-left:2vw;
      margin-top:1vh;
    }
`;

const Text = styled.div`
  flex-basis: 50vw;
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

    @media screen and (max-width: 750px) {
      padding-top:1vh;
      font-size: 2.8vh;
    }

    @media screen and (max-width: 499px) {
      flex-basis: 45vw;
    }
`;

console.log('TodoItem Here');
function TodoItem({ id, text, done}) {
  //수정해야함..
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  const onUpdate = () => dispatch({ type: 'UPDATE', id });
  
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle} >
        {done && <BiCheck /> }
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <TodoUpdate onClick={onUpdate}>
        <BsPencil/>
      </TodoUpdate>
      <Remove onClick={onRemove}>
        <RiDeleteBin6Line />
      </Remove>
      <hr className="Line3"/>
    </TodoItemBlock>
     );
}
export default React.memo(TodoItem);