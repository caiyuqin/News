<template>
  <div class="page-swipe">
			<mt-swipe :auto="4000">
				<mt-swipe-item>
              <img src="../assets/img/brand2.png" alt=""/>
        </mt-swipe-item>
				<mt-swipe-item>
              <img src="../assets/img/brand3.png" alt=""/>
        </mt-swipe-item>
				<mt-swipe-item>
              <img src="../assets/img/brand2.png" alt=""/>
        </mt-swipe-item>
        <mt-swipe-item>
              <img src="../assets/img/brand3.png" alt=""/>
        </mt-swipe-item>
			</mt-swipe>
</div>
</template>
<style scoped>
.page-swipe {
  height:2.5rem;
  font-size: 30px;
}
img {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>


<script>
export default {};
</script>

