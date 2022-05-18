<template>
  <article>
    <div>
      <img src="sourceImg" alt="" />
    </div>
    <button 
        @click="reproducirparar">
        <MIconPlay v-show="!isPlaying"/>
        <MIconPause v-show="isPlaying"/>
        {{ title }}</button>
  </article>
</template>

<script>
import { Howl, Howler } from "howler";
export default {
  props: ["title", "sourceImg"],
  data() {
    return {
      sound: "",
      
    };
  },
  mounted() {
    this.sound = new Howl({
      src: ["/audios/Oye.mp3"],
    });

   
  },
  methods: {
    reproducirparar() {
        if(this.sound.playing()){
            this.sound.pause()
            this.isPlaying = false;
        }else{
            this.sound.play();
            this.isPlaying = true
        }
    },
  },
};
</script>

<style lang="postcss">
article {
  @apply w-1/4 mx-3;
  img {
    @apply h-32;
    object-fit: cover;
  }
  button {
    @apply bg-gray-200 p-3 w-full my-5;
    border-radius: 10px;
  }
}
</style>