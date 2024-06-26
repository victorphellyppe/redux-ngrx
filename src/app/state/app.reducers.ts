import { ActionReducerMap } from "@ngrx/store";
import { livroReducer } from "../../livro/state/livro.reducer";
import { IAppState } from "./app.state";

export const appReducers: ActionReducerMap<IAppState> = {
  livros: livroReducer
}
