import { boardConstants } from "./action-types";

/**
 * To add tasks and access drop event
 * @param {string} Taks, Id
 */

const dropEventData = (listing,id) => ({
  type: boardConstants.DROP_EVENT_DATA,
  listing:listing,
  id:id
});

const addTask = (data) => ({
  type: boardConstants.ADD_TASK_DATA,
  taskItem:data.label,
});

export const boardAction = {
  dropEventData,
  addTask
};
