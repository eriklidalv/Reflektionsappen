const reflectionsReducerDefaultState = [];

const reflectionsReducer = (state = reflectionsReducerDefaultState, action) =>{
  switch(action.type){
    case 'ADD_REFLECTION':
      //return state.concat(action.reflection); // use concat in order NOT to change the array, avoid push
      return [...state, action.reflection] // or use spread operator ... it help us to get the new array grabbing items from the existing one
    case 'REMOVE_REFLECTION':
    // If the filter method returns true the item will be kept in the array, if it returns false it will be removed
    //Same as concat, filter doesn't change state, it return the new array with the subset of the values
      return state.filter(({id}) => {return id!== action.id});
    case 'EDIT_REFLECTION':
      return state.map((reflection)=>{
        if(reflection.id===action.id){ //
          return {...reflection, ...action.updates} // grab all properties from, override ONLY ones that user passed in, return new array with overridden properties
        }
        else{
          return reflection;
        }
      });
      case 'GET_REFLECTIONS':
        return action.reflections;
    default:
      return state;
  }
};


export default reflectionsReducer;
