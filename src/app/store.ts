import { configureStore } from '@reduxjs/toolkit'
import {counterSliceReducer} from "../features/counter/counterSlice.ts";
import {pokemonApi} from "../services/pokemon.ts";

export const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch