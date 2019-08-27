import { createAction } from "redux-actions";
import { choiceness_api } from "@api/choiceness"
// 处理同步的action
export const goodsTypesAction = createAction("GOODS_TYPES",(val)=>val)

// 处理异步的action  当数据请求成功后通过dispatch触发同步action
export const goodsTypesAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await choiceness_api();
        dispatch(goodsTypesAction(data.martshows))
    }
}