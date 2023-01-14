import axios from "axios"
import { useContext, useEffect } from "react"
import { AppContextProps } from "../../../types"
import { Contact } from "../Contact/Contact"
import { AppContext } from "../../context/app.context"

export const ContactsList = (): JSX.Element => {
  const { state, dispatch } = useContext<AppContextProps>(AppContext)
  const {editableContactsList} = state

  useEffect(() => {
    axios.get('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json')
    .then(res => {
      return dispatch({
        type: 'app/getContacts',
        payload: {contactsList: res.data}
      })
    })
  }, [])

  return (
    <div className="bg-teal-500 m-2 p-4 rounded-3xl gap-4 flex flex-col">
      {editableContactsList.length ? editableContactsList.map(contact => <Contact {...contact} key={`contact_${contact.id}`}/>) : <p className="flex justify-center">No results</p>}
    </div>
  )
}