import { boardConstants } from "./action-types";
import {data} from "../../Common/components/data"
import { v4 as uuidv4 } from 'uuid';

/* Function will check the local storage 
* if data is available in the localstorage then it will return the same data
* else stores the data in the local storage.
*/
function initialData(){
  if(localStorage.getItem("trelloData")){

    return JSON.parse(localStorage.getItem("trelloData"))
  } else{
    
    localStorage.setItem("trelloData",JSON.stringify(data))
    return data
  }
}
const initialState = {
  boardData:initialData(), // To get initial data from the file
};

const kanban = (state = initialState, action) => {
  switch (action.type) {
    case boardConstants.ADD_TASK_DATA:{
      // Action updates the array and stores the data.
      let oldData=JSON.parse(localStorage.getItem("trelloData"))
      let item={activity: [],
      comments: [],
      count: {like: 0, comment: 0, tasks: {}},
      date: "11/12/2021",
      id: uuidv4(),
      title: "cp",
      listingType: "todo",
      percent: "20",
      tasks:  [],
      label: action.taskItem,
      user: "user"
    }
      oldData.push(item)
      localStorage.setItem("trelloData",JSON.stringify(oldData))
      return {
        ...state,
        boardData:oldData,
      };
    }
    case boardConstants.DROP_EVENT_DATA:{
      let oldData=state.boardData
      oldData.map((item) => {
        if(item.id===action.id){
          item.listingType=action.listing
          return item
        }
      })
      localStorage.setItem("trelloData",JSON.stringify(oldData))
      return {
        ...state,
        boardData: oldData,
      };
    }
    default:
      return state;
  }
};
export { kanban };
