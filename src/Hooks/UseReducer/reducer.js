
const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1, showText: state.showText }
  
      case 'showText':
        return { count: state.count, showText: !state.showText }
      default:
        return state
    }
  }
  export default reducer