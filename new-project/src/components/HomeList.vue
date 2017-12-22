<template> 
  <div class="newsList">
      <ul>
          <li v-for="(item,index) in homeList">                  
              <router-link :to="'/article/'+item.id">                   
                  <h2>{{index+1}}.{{item.title}}</h2>
                  <p>{{item.detail}}</p>
              </router-link>
          </li>
          
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      homeList: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var _this = this;
      this.$http
        .get("../../src/data/follow.data")
        .then(function(res) {
          _this.homeList = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

