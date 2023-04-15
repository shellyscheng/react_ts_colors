import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react';
import {
  AdjustColorActions,
  colorReducer,
  initialState,
} from './lib/color-reducers';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: '#FFADEF',
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
