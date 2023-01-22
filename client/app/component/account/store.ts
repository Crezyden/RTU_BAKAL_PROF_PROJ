import {persistStore, FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './root-reducer';
import { rtkQueryErrorLogger } from './middlewares/error.middleware';
import { api } from "./api/api";

const persistConfig = {
	key:'root',
	storage,
	whitelist:['auh']
}

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
