import { configureStore } from "@reduxjs/toolkit";
import favorito from "./reducers/favorito";

export default configureStore({
    reducer: {
        favorito,
    }
})