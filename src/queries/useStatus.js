import {useQuery} from "react-query";
import axios from "axios";

export function useStatus() {
    return useQuery('status', () => axios.get('http://localhost:12345/status'))
}
