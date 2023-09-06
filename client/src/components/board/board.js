import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../actions/boardActions';

const Board = () => {
  const [boardName, setBoardName] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.board.error);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(boardActions(boardName));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="boardName" value={boardName} onChange={(e) => setBoardName(e.target.value)} />
        <button type="submit">Create Board</button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default Board;