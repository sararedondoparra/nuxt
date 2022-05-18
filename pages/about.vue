<template>
  <main>
    <banner-image :source="'/IMAGEN2.jpg'" :alt="'imagen de arena'" />
    <section>
      <h1>Pagina 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        adipisci illum natus ad consequatur architecto labore perferendis quia
        sit dolorum error aliquid impedit magni harum est itaque, illo ratione
        accusamus!
      </p>
    </section>
    <section class="cards-section">
      <article-card v-for="(item, i) in 4" :key="i" />
    </section>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    <div id="map-wrap" style="height: 100vh">
      <client-only>
        <l-map :zoom="13" :center="[55.9464418, 8.1277591]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
        </l-map>
      </client-only>
    </div>
  </main>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      mountains: [],
    };
  },
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      (res) => res.json()
    );
  },
};
</script>

<style>
.cards-section {
  display: flex;
}
</style>