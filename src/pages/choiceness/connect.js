import { goodsTypesAsyncAction } from "@actions/actionCreator"

export const mapStateToProps = (state)=>({
    weekGoods:state.ChioceNess.goodList
})

export const mapDispatchToProps = (dispatch)=>({
    handleGetGoodList(){
        dispatch(goodsTypesAsyncAction())
    }
    
})