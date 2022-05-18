<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">
                    <MlIconHome />
                    Home
                    </NuxtLink>
            </li>
            <li>
                <NuxtLink to="about">
                    <MlIconRabbit />
                    About
                    </NuxtLink>
            </li>
        </ul>
        <div 
            class="user"
            @click="panelIsOpen = !panelIsOpen"></div>
        <div 
            class="panel"
            v-show="panelIsOpen"></div>
    </nav>
</template>

<script>
    export default{
        data(){
            return{
                panelIsOpen: false
            }
        }
    }
</script>


<style lang="postcss">
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    @apply bg-gray-200;
    ul{
        display: flex;
        li{
            @apply p-5;
        }
    }
    .user{
        @apply m-4 w-12 h-12 bg-gray-400 rounded-full;
    }
    .panel{
        @apply w-48 h-24 bg-white;
        position: absolute;
        top: 80px;
        right: 0;
    }
}
.nuxt-link-exact-active{
    font-weight: bold;
}
</style>