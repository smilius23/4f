export default function reducer(state, action) {
	switch (action.type) {
		case 'SET_URL':
      return {
        ...state,
        data_url: action.dataLink
      }
    default:
      return {
        ...state
      }
	}
}