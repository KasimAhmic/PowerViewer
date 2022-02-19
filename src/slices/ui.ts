import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Stream } from '../@types';

export interface UiState {
  streams: Stream[];
}

const initialState: UiState = {
  streams: [],
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addStream: (state: UiState, action: PayloadAction<Stream>) => {
      state.streams.push(action.payload);
    },
    removeStream: (state: UiState, action: PayloadAction<string>) => {
      state.streams = state.streams.filter((stream) => stream.id !== action.payload);
    },
  },
});

export const selectStreams = (state: RootState): Stream[] => state.ui.streams;
export const streamCount = (state: RootState): number => state.ui.streams.length;

export const { addStream, removeStream } = ui.actions;

export const { name: uiPath, reducer: uiReducer } = ui;
