import { useContext, useState } from 'react'
import {AppContextProps, ContactProps} from '../../../types'
import { AppContext } from '../../context/app.context'

export const Contact = (contact: ContactProps) => {
  const { dispatch } = useContext<AppContextProps>(AppContext)
  const {selected} = contact
  const onToggle = () => {
    dispatch({
      type: "app/toggleItem",
      payload: {id: contact.id, selected: contact.selected}
    })
  }
  return (
    <div onClick={() => onToggle()} className={`p-1 flex row gap-4 hover:bg-teal-700 rounded-3xl align-middle cursor-pointer ${selected ? 'bg-teal-600' : ''}`}>
      <img
        alt={String(contact.id)}
        src={contact.avatar ? contact.avatar : require('../../assets/images/no-img.png')}
        className="h-8 w-8 rounded-full bg-white object-contain self-center" />
      <div className="flex gap-2 items-center flex-wrap">
          <span>
            {contact.first_name}
          </span>
          <span>
            {contact.last_name}
          </span>
          <span>
            {contact.email}
          </span>
      </div>
    </div>
  )
}