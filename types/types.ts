import { ContactProps } from './interfaces';
export type ActionMessage = |
{
  type: 'app/getContacts'
  payload: {
    contactsList: ContactProps[]
  }
} | {
  type: "app/toggleItem"
  payload: {
    id: number
    selected: boolean
  }
} | {
  type: "app/filter"
  payload: {
    filterValue: string
  }
}