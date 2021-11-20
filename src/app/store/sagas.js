import {take, put , select} from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';

const url = "http://localhost:7777";

export function* taskCreationSaga(){
    while (true){
        const {groupID}=yield take(mutations.REQUEST_TASK_CREATION);
        const ownerId = `U1`;
        const taskID = uuid();
        yield put(mutations.createTask(taskID,groupID,ownerId)); 
        const {res} = yield axios.post(url + `/task/new`,{
            task:{
                id:taskID,
                group: groupID,
                owner: ownerId,
                isComplete:false,
                name: "new task"
            }
        });
        
    }
}

export function* taskModificationSaga(){
    while(true){
        const task = yield take([mutations.SET_TASK_GROUP,mutations.SET_TASK_NAME,mutations.SET_TASK_COMPLETE]);
        axios.post(url + `/task/update`,{
            task:{
                id: task.taskID,
                group: task.groupID,
                name:task.name,
                isComplete: task.isComplete
            }
        })
    }
}