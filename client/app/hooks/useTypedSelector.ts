import { TypedUseSelectorHook, useSelector } from "react-redux";

import { TypeRootState } from "../component/account/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector