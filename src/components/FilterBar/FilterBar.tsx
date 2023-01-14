import { PropsWithChildren, useContext } from "react"
import { AppContextProps } from "../../../types"
import { AppContext } from "../../context/app.context"

export const FilterBar = ({children}: PropsWithChildren) => {
  const { dispatch } = useContext<AppContextProps>(AppContext)
  const onInput = (e: any) => {
    dispatch({type: 'app/filter', payload: {filterValue: e.target.value}})
  }
  return (
    <div className="bg-teal-500 p-2 m-2 rounded-3xl">
      <input type="text" className="rounded-full bg-teal-600 text-center block w-full placeholder:text-white" placeholder="You can filter by name here..." onChange={(e) => onInput(e)}/>
    </div>
  )
}