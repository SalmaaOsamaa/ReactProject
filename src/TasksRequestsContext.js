import axios from "axios";
import { createContext , useEffect, useState } from "react";

export const TasksRequests = createContext(0);

export function TasksRequestsContext(props){
    const [TasksRequest , setTasksRequests] = useState([])
    const [Taskers , setTaskers] = useState([])
    const [Customers , setCustomers] = useState([])
    const [TaskersRequests , setTaskersRequests] = useState([])
    const [RequestsCount , setRequestsCount] = useState('')
    const [RequestsUserCount , setRequestsUserCount] = useState('')
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true);
        await axios.get("http://localhost:4000/taskrequests").then((res) => { 
            setTasksRequests(res.data)
            setTaskersRequests(res.data)
            setLoading(false);
        })}
    const getTasker = async () => {
            await axios.get("http://localhost:4000/taskers").then((res) => { 
                setTaskers(res.data)
            })}
            const getUsers = async () => {
                await axios.get("http://localhost:4000/user").then((res) => { 
                    setCustomers(res.data)
                })}
                const approvedTask = async (id , data) => {
                    data.status = "approved"
                    await axios.patch(`http://localhost:4000/changeTaskStatus/${id}` , data).then((res) => { 
                        console.log(res);
                    })}
                    const RejectedTask = async (id , data) => {
                        data.status = "rejected"
                        await axios.patch(`http://localhost:4000/changeTaskStatus/${id}` , data).then((res) => { 
                            console.log(res);
                        })}
                        const countTasks = () => {
                            let userData = JSON.parse(localStorage.getItem("userData"));
                            if(userData.role === "Customar"){
                                const newUserTasks = TasksRequest.filter((req) => req.customer === userData._id)
                                setRequestsUserCount(newUserTasks);
                                console.log(RequestsUserCount);
                                console.log("user");
                            }else {
                                const newUserTasks = TasksRequest.filter((req) => req.tasker === userData._id)
                                console.log(newUserTasks);
                                setRequestsCount(newUserTasks);
                                console.log('tasker');
                            }
                        }
        useEffect(() => {
            getData();
            getTasker();
            getUsers();
        }, [])
        return <TasksRequests.Provider value={{TasksRequest , loading , Taskers , TaskersRequests , Customers , approvedTask , RejectedTask , countTasks , RequestsCount , RequestsUserCount }}>
        {props.children}
        </TasksRequests.Provider>
}