import {Check} from "./Check";
import {Spinner} from "./Spinner";

export function Step({task, finished, done = false}) {
    return <li className="flex items-center space-x-4">
        {done && <div className="flex items-center p-2 justify-center h-8 w-8 text-white bg-blue-500 rounded-full">
            <Check/>
        </div>}

        {!done && <Spinner/>}

        {!done && <p className="text-gray-400">{task}...</p>}
        {done && <p className="text-white">{finished}</p>}
    </li>
}
