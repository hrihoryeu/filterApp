import { createContext, useReducer } from 'react'
import { initialAppState, reducer } from './reducer'
import { AppContextProps } from '../../types'

export const AppContext = createContext<AppContextProps>({
  state: initialAppState,
  dispatch: () => null,
})

export const AppContextProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialAppState)

  return <AppContext.Provider value={{ state, dispatch }} {...props} />
}
