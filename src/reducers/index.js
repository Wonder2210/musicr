export const findSong=(
  state={
  status:false,
  data:null
},action)=>{
  switch (action.type) {
    case "START_SEARCH":
      return{
        status:false
      }
      break;
    case "SUCCESSFUL_SEARCH":
    return{
      status:true,
      data:action.data
    }
    case "FAIL_SEARCH":
    return {
      status:false,
      data:action.data
    }
    default:
    return state;
  }
}
