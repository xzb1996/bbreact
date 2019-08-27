import http from "@utils/http";

// metro图片
export const metro_api = ()=>http.get("/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=302059180&id=tDNwmG1T1NGKfL%2F8BJI2Aw%3D%3D&client_info=%7B%22platform%22%3A%22ios%22%7D")

// 商品列表
export const choiceness_api = ()=>http.get("/martshow/v1/7702-1-all-0-1-0-18.html?client_info=&h5_uid=null")