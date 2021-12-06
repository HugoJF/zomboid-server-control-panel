import {useMutation} from "react-query";
import axios from "axios";

export function useTurnOff() {
    return useMutation(() => axios.post(`${process.env.REACT_APP_ENDPOINT}/off`))
}
