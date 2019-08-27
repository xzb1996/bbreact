import http from "@utils/http";

// 商品详情1
export const metro1_api = ()=>http.get("/mroute.html?_airborne_channel=beibei&method=beibei.martshow.item.detail.recom.list.get&scene_id=app_item_detail_guess_you_like&_airborne_channel=beibei&event_id=107950516&iid=34850993&uid=0")

// 商品详情2
export const metro2_api = ()=>http.get("mroute.html?method=beibei.module.pintuan.recom.list.get&_airborne_channel=beibei&scene_id=app_item_detail_buy_recom&iid=34850993&event_id=107950516&uid=0")
