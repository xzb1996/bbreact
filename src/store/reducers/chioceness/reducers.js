import { handleActions} from "redux-actions"

const defaultState = {
    goodList:[]
}

export default handleActions({
    GOODS_TYPES:(state,action)=>{
        let goodsState = Object.assign({},state);
        goodsState.goodList = action.payload;
        // console.log(goodsState,3222)
        return goodsState;
    }
},defaultState)