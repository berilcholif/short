<template>
  
  <div class="container-fluid" style="margin-top:50px">

    
    <form class="form-inline my-2 my-lg-0" style="justify-content: center; gap: 8px;">
          <h1 style="flex:auto">Karyawan</h1>
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">CARI</button>
              <router-link :to="{ name: 'add' }" class="btn btn-primary" role="button">+</router-link>
          </form>
<Table ></Table></div>
</template>
<script>
import Table from './table.vue';
export default {
setup() {
},
components: { Table }
}
</script>