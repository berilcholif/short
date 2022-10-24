<template>

  <body class="container">
    
<main class="form-signin w-100 m-auto">
  <form>
    <!-- <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <router-link :to="{ name: 'home' }" class="btn btn-primary" role="button">Sign in</router-link>
 
  </form>
</main>


    
  </body>

</template>
<style>
.container{
  position: relative;
  width: 20%;
  margin-top: 10rem;
  padding: 1rem 1rem;
  height: 100%;
}
</style>
<script>
export default {
    setup() {
        
    },
}
</script>