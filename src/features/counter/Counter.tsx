
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { decrement, increment } from './counterSlice'

export function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    );
}