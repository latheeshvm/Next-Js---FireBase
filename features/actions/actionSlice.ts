import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { database, getActions } from "../../firebase/init";

  const initialState = {
    loading: 0,
    actions:[],
    error:""
  }

export const fetchActions = createAsyncThunk("action/fetchActions", async ()=>{
    return await getActions(database)
})

export const ActionSlice = createSlice({
    initialState:initialState,
    name: "actions",
    reducers: {

    },
    extraReducers:(builder) =>{
        builder.addCase(
            fetchActions.pending,  (state:any) =>{
                console.log("Executing pending")
                state.loading = true
            }
        )
        builder.addCase(fetchActions.fulfilled, (state:any, action:any)=>{
            console.log("Executing fullfill")
            state.loading = false,
            state.actions = action.payload
            state.error = ""
        })
        builder.addCase(fetchActions.rejected, (state:any, action:any)=>{
            console.log("Executing")
            state.loading = false,
            state.action = []
            state.error = action.error.reducer
        })
    }
})

export default ActionSlice.reducer;