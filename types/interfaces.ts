import { Dispatch } from "react"
import { ActionMessage } from "./types"

export interface ContactProps {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  avatar: string
  selected: boolean
}

export interface AppState {
  contactsList: ContactProps[],
  editableContactsList: ContactProps[]
}

export interface AppContextProps {
  state: AppState
  dispatch: Dispatch<ActionMessage>
}