import { StatesList } from "../types/states-list";

export const onStatesListFilter = (state: string, statesList: StatesList): StatesList => {
    return statesList.filter((stateResponse) => stateResponse.name.toLowerCase().includes(state.toLowerCase().trim()));
}