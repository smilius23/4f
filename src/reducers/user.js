const userInfo = {
  userId: 'X11211',
  customerId: '00331036310005'
}

export default function reducer(state = userInfo, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state
      }
    case 'SET_USER':
      return {
        ...state,
        userId: action.userId
      }
    case 'SET_COMPANY':
      return{
        ...state,
        customerId: action.customerId
      }
    default:
      return state
  }
}