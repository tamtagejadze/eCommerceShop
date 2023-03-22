const initialState = {
    feedback: ''
  };
export default function addComment (state = initialState,action){
    switch (action.type) {
        case 'newComment':
          return { ...state, feedback: action.data }; 
        default:
          return state;
      }
}