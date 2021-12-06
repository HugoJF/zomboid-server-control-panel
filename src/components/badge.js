import {Spinner} from "../Spinner";
import clsx from "clsx";

const colors = {
    red: 'text-red-900 bg-red-500',
    green: 'text-green-900 bg-green-500',
};

export function Badge({children, loading, color}) {
    return <h2 className={clsx(
        'flex px-8 py-4 space-x-4 text-3xl font-bold rounded-full',
        colors[color],
    )}>
        <div>{children}</div>
        {!loading && <Spinner/>}
    </h2>
}
