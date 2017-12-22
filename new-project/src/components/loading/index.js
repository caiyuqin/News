const LoadingComponent=require('./Loading.vue')
const loading={
    install:function(Vue){
        Vue.component('loading', LoadingComponent.default)
    }
}

module.exports = loading




