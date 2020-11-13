import { createContext } from 'react'

//for app.js

export const BrightThemeContext = createContext(false)

export const FirstnameContext = createContext({ firstname: null, setFirstname: _ => {} })

export const UserIdContext = createContext(null)

export const IsAuthContext = createContext(false)

export const LogoutHandlerContext = createContext(_ => {})

export const LoginHandlerContext = createContext(_ => {})

export const AcceptEmailContext = createContext(_ => {})

export const ToggleThemeContext = createContext(_ => {}) 

export const SignalContext = createContext(null)

export const SetTodoToDeleteContext = createContext(_ => {})

export const YourTodoContext = createContext(null)

export const CloseModalContext = createContext(_ => {})

export const SetNewTodoContext = createContext(_ => {})

export const TodoStatsContext = createContext({})

export const SetTodoToUpdateContext = createContext({})

export const TodoToUpdateContext = createContext({value : {}, unset: _ => {}})

export const OpenModalContext = createContext(_ => {})

export const PassTodoDataContext = createContext(_ => {})

export const TodoDataContext = createContext({})

export const UserDataContext = createContext({})

export const EditUserContext = createContext('')

export const SetEditUserContext = createContext({ value: '', set: _ => {} })

export const SetUpdatedUserContext = createContext({})

export const ViewUserStatsContext = createContext({ value: '', set: _ => {} })

export const SetItemToDeleteContext = createContext(_ => {})

export const DecreaseUserStatsContext = createContext(_ => {})

export const IncreaseUserStatsContext = createContext(_ => {})

export const UnfollowUserContext = createContext(_ => {})

export const SetBlockingUserContext = createContext(_ => {})

export const FollowControlsContext = createContext(null)

export const ConversationsContext = createContext({ convs: [], total: null })

export const LoadingContext = createContext(false)

export const PageContext = createContext({ page: 1, setPage: _ => {} })

export const HasNextPageContext = createContext({ has: false, set: _ => {} })

export const SetConvToDeleteContext = createContext(_ => {})

export const SetConvToEditContext = createContext(_ => {})

export const SetConvToAddContext = createContext(_ => {})

export const CurrentlyOpenedConvContext = createContext({ value: null, set: _ => {}})

export const QuitHandlerContext = createContext(_ => {})

export const ReceiverContext = createContext('')
//export
//