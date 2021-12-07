import clsx from 'clsx';
import {Spinner} from "./spinner";

export function Button({onClick, children, loading, disabled}) {
    return <button
        onClick={() => !disabled && onClick()}
        className={clsx(
            'flex items-center justify-center space-x-4 px-8 py-4',
            'text-2xl text-white bg-blue-500',
            'duration-150 rounded-lg shadow', {
                'opacity-50': disabled,
                'hover:bg-blue-600 cursor-pointer': !disabled,
            }
        )}
    >
        <div>{children}</div>
        {loading && <Spinner/>}
    </button>
}
