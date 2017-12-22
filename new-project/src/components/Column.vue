<template>
    <ul class="box clearfix">
      <li v-for="(item,index) in listArr"> 
            <div class="chan-cell">
              <a href="javascript:;" target="_blank">
                  <div class="name-b">{{item.title}}</div>
                  <div class="name-s">{{item.content}}</div>	
              </a>
	         </div>
       </li>
    </ul>

</template>
<script>
export default {
  data() {
    return {
      listArr: []
    };
  },
  mounted() {
    this.column();
  },
  methods: {
    column() {
      var _this = this;
      this.$http
        .get("../../src/data/column.data")
        .then(function(res) {
          _this.listArr = res.data;
        })
        .catch(function(res) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.box li {
  float: left;
  width: 48%;
  padding: 0.05rem;
}
.chan-cell {
  width: 100%;
  height: 1.2rem;
  overflow: hidden;
  float: left;

  text-align: center;
}
.chan-cell .name-b {
  color: #000;
  font-size: 0.2rem;
  padding-top: 0.3rem;
}
.chan-cell .name-s {
  font-size: 0.2rem;
  color: #9f9f9f;
  padding-top: 5px;
}
.chan-cell a {
  display: block;
  width: 100%;
  height: 1.2rem;
  overflow: hidden;
  background: #e1e1e1;
}
.chan-cell a:hover {
  background: #b0bf26;
}
.chan-cell a:hover .name-b {
  color: #fff;
}
.chan-cell a:hover .name-s {
  color: #fff;
}
</style>
