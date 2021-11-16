import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId  } from './Context';

const CircleButton = styled.button`
  z-index: 2;
  background: transparent;
  cursor: pointer;
  width: 5.5vw;
  height: 12vh;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: fixed;
  bottom: 20vh;
  left:7.3vw;
  
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      .Circle{
        background: #ff8787;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const Circle = styled.button`
background: #4BC6D7;
cursor: pointer;
width:6vw;
height: 36.5vh;
left:6vw;
margin-left:-1.8vw;
bottom: -10.3vh;
z-index: 1;
  position: fixed;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3vw;
  border: none;
  outline: none;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  transition: 0.3s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
      
    `}
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  height: 26vh;
  bottom: 0;
  left:8vw;
  position: fixed;
  background-color:#f8f9fa;
`;

const InsertFormbg = styled.div`
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  background: rgba(0, 0, 0, 0.3);
  position:fixed;

`;

const InsertForm = styled.form`
  background: #f8f9fa;
  height: 26vh;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 1vw;
  margin-left:12vw;
  margin-top:8vh;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 70vw;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormbg>
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요"
            onChange={onChange}  value={value}/>
          </InsertForm>
        </InsertFormPositioner>
       </InsertFormbg>
      )}

      
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
      <Circle/>
    </>
  );
}

export default React.memo(TodoCreate);