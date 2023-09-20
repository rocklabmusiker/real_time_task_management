import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';

export const CreateBoardForm: React.FC = () => {
  const [boardName, setBoardName] = useState<string>('');

  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.isAuthenticated);
  const isLoading = useSelector((state: RootState) => state.board.isLoading);
  const error = useSelector((state: RootState) => state.board.error);

  const handleSubmit = () => {
        
    
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Board Name'
        value={boardName}
        onChange={e => setBoardName(e.target.value)}
      />
      
      <button onClick={handleSubmit} disabled={isLoading}>
        Create Board
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
