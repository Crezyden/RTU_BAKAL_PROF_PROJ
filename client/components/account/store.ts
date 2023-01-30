import {persistStore, FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as toastrReducer } from 'react-redux-toastr';
import { rtkQueryErrorLogger } from './middlewares/error.middleware';
import { api } from "./api/api";
import { authSlice } from "./auth/auth.slice";

const persistConfig = {
	key:'root',
	storage,
	whitelist:['auth']
}
export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authSlice.reducer,
	toastr: toastrReducer

})
const persistedReducer =persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck:{
			ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
		}
	})
	// .concat(rtkQueryErrorLogger).concat(api.middleware) 
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
