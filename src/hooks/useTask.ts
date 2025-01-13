    import {useQuery} from '@tanstack/react-query';
    import { TaskData } from '../types/task.type';
   import { fetchTask } from '../api/task.api';


    export const useTask=()=>{
        return useQuery<TaskData[]>({queryKey:['tasks'],queryFn:fetchTask})
    }