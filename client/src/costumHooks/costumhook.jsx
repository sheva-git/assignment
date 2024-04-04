import Axios from "axios"
import { useDispatch } from "react-redux";
import { updatePosts, updateTodos } from "../store/allSlice";
import { updateUsers } from "../store/allSlice";

function useFunction() {
    const dispatch = useDispatch()

    const deleteItem = async (url, _id) => {

        const { data } = await Axios.delete(url, {
            data: { _id: _id }
        })
    }
    const updateItem = async (url, item) => {

        const { data } = await Axios.put(url, item, {
        })
    }
    const updateItemById = async (url) => {
        const { data } = await Axios.put(url)
    }


    const addItem = async (url, item) => {
        const { data } = await Axios.post(url, item)
    }

    const getdata = async (url) => {
        const { data } = await Axios.get(url)
        switch (url) {
            case "http://localhost:1325/api/users":
                return dispatch(updateUsers(data))
            case "http://localhost:1325/api/todos":
                return dispatch(updateTodos(data))
            case "http://localhost:1325/api/posts":
                return dispatch(updatePosts(data))

        }

    }





    return { deleteItem, updateItem, addItem, getdata, updateItemById }
}
export default useFunction