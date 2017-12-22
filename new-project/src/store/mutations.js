import {
    SHOW_HEADER,
    HIDE_HEADER,
    LOADING_SHOW,
    LOADING_HIDE
} from './type'


const state={
   showHeader:true,
   loading:false
};

const mutations={
    [SHOW_HEADER](state){
        state.showHeader=true;
    },
    [HIDE_HEADER](state){
        state.showHeader=false;
    },
    [LOADING_SHOW](state){
        state.loading=true
    },
    [LOADING_HIDE](state){
        state.loading=false
    }
};

const getters={
    show:state=>{
        return state.showHeader
    },
    loadingshow:state=>{
        return state.loading
    }
};


export default{
    state,
    mutations,
    getters
}