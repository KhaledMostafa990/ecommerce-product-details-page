import {
  createSlice,
  SliceCaseReducers,
  ReducersMapObject,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';

export const createSliceReducer = (
  name: string,
  initialState: any,
  reducersHandlers: ValidateSliceCaseReducers<any, SliceCaseReducers<any>>
) => {
  const sliceReducer = createSlice({
    name,
    initialState,
    reducers: reducersHandlers,
  });
  return sliceReducer;
};
