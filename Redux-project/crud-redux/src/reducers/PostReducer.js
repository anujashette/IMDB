const postReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_POST':
        return state.concat([action.data]);
      case 'DELETE_POST':
        return state.filter((post)=>post.id !== action.id);
      case 'EDIT_POST':
        return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post);
      case 'UPDATE':
        return state.map((post)=>{
          if(post.id === action.id) {
            return {
               ...post,
               title:action.data.newTitle,
               message:action.data.newMessage,
               editing: !post.editing
            }
          } else return post;
        })
      default:
        return state;
    }
  }

// const initState = [{
//   'firstname': 'anuja',
//   'lastname': 'shette',
//   'isChange':false
// }];

// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'ADD_POST':
//         return state.concat([action.data]);
//     case 'PRINT_DATA':
//       return {...state,firstname:'anjali',isChange: !state.isChange};
//       case 'PRINT_DATA_REPEAT':
//           return {...state,firstname:'omkar',isChange: !state.isChange};
//     default:
//       return state;
//   }
// }

// export default reducer;