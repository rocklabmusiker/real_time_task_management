import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBoard } from '../actions/boardActions';
import classes from './board.module.css'; // Import the CSS

const CreateBoardComponent = () => {
    const [boardName, setBoardName] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(boardName.trim()) {
            dispatch(createBoard({ boardName: boardName.trim() }));
            setBoardName("");
        }
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <input
                    type="text"
                    value={boardName}
                    onChange={(e) => setBoardName(e.target.value)}
                    placeholder="Enter board name"
                    className={classes.input}
                />
                <button type="submit" className={classes.button}>Create Board</button>
            </form>
        </div>
    );
};

export default CreateBoardComponent;
