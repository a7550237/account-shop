<template>
  <div>
    <NavBar class="home">
      <div slot="center">
        购物街
      </div>
    </NavBar>
  </div>
</template>
<script>
import NavBar from '../../components/common/NavBar'

export default {
  name:'Home',
  data(){
    return{
      
    }
  },

  components:{
    NavBar
  }
}
</script>
<style scoped>
  .home{
    background: pink;
    color: white;
  }
</style>