<template>
    <nav class="navbar navbar-expand-lg" style="background-color:#4f4f4f">
        <router-link :to="{ name: 'home' }" class="navbar-brand" style="color:white">Inosoft</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link" style="color:white">HOME</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'karyawan' }" class="nav-link" style="color:white">KARYAWAN</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'magang' }" class="nav-link" style="color:white">MAGANG</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'cuti' }" class="nav-link" style="color:white">CUTI</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'resign' }" class="nav-link" style="color:white">RESIGN</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'gaji' }" class="nav-link" style="color:white">GAJI</router-link>
                </li>
            
            </ul>
            <ul class="navbar-nav ms-auto">
            <li class="nav-item" >
                    <router-link :to="{ name: 'sign' }" class="nav-link" style="color:white" > <i class="bi bi-box-arrow-right"></i></router-link>  
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {


    }
</script>
