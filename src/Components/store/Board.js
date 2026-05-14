import {create} from 'zustand';
import React from 'react';
import {boardData} from '../Data/data';

const useBoard=create((set)=>({

    board:boardData,
    setBoard:(board)=>set((state)=>({board})),
    

}));

export default useBoard;