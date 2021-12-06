import {useQuery} from "react-query";
import axios from "axios";

export function useStatus() {
    return useQuery('status', () => axios.get(`${process.env.REACT_APP_ENDPOINT}/status`))
}
