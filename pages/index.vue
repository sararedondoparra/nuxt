<template>
  <main>
    <banner-image :source="'/IMAGEN1.jpg'" :alt="'imagen de prueba'" />
    <section>
      <h1>Pagina 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        adipisci illum natus ad consequatur architecto labore perferendis quia
        sit dolorum error aliquid impedit magni harum est itaque, illo ratione
        accusamus!
      </p>
    </section>
    <section class="cards-section">
      <article-card
        v-for="(card,i) in cards"
        :key="i"
        :title="card.title" />

    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      cards: [
        { title: 'Botón uno'},
        { title: 'Botón dos'},
        { title: 'Botón tres'},
        { title: 'Botón cuatro'}
      ],
    }
  },
}
</script>

<style lang="postcss">
section {
  @apply p-20;
  h1 {
    @apply text-5xl;
  }
}
</style>