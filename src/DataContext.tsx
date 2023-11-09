import { createContext } from 'react';
import { dataProps } from './App';

interface contextType {
  makeupData: dataProps[],
  isLoading: boolean,
}

export const DataContext = createContext<contextType>({
  makeupData: [], 
  isLoading: false
})
