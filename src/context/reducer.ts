import { ActionMessage, AppState } from "../../types"

export const initialAppState: AppState = {
  contactsList: [],
  editableContactsList: []
}

export const reducer = (state: AppState, action: ActionMessage): AppState => {
  switch (action.type) {
    case "app/getContacts": {
      const { contactsList } = action.payload
      const newList = contactsList.map((el) => ({ ...el, selected: false }))
      const nextState = {
        ...state,
        contactsList: newList,
        editableContactsList: newList
      }

      return nextState
    }
    case "app/toggleItem": {
      const { id, selected } = action.payload
      const selectedEl = state.contactsList[id - 1]
      selectedEl.selected = !selected
      const nextState = {
        ...state,
        ...[...state.contactsList.slice(0, id), selectedEl, ...state.contactsList.slice(id + 1)]
      }

      return nextState
    }
    case "app/filter": {
      const { filterValue } = action.payload
      const newState = state.contactsList.filter(el => {
        const fullName = `${el.first_name} ${el.last_name}`
        return fullName.toLowerCase().includes(filterValue.toLowerCase())
      })
      const nextState = {
        ...state,
        editableContactsList: newState
      }

      return nextState
    }
  }
}
