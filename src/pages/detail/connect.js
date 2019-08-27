import { goodsTypesAsyncAction } from "@actions/actionCreator"

export const mapStateToProps = (state)=>({
    list:state.ChioceNess.goodList
})

export const mapDispatchToProps = (dispatch)=>({
    handleGetGoodList(){
        dispatch(goodsTypesAsyncAction())
    }
    
})