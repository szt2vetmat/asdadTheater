<template>
  <div>
    <h2>Színházak és előadásaik</h2>
    <ul>
      <li v-for="theater in theaters" :key="theater.neve">
        <h3>{{ theater.neve }}</h3>
        <ul>
          <li v-for="show in theater.eloadasok" :key="show.cim">
            <a :href="show.url" @click.prevent="selectTheaterAndShow(theater, show)">
              {{ show.cim }}
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <div v-if="selectedTheater.neve">
      <h2>Kiválasztott Színház: {{ selectedTheater.neve }}</h2>
      <h3>Kiválasztott Előadás: {{ selectedShow.cim }}</h3>
      <p>URL: {{ selectedShow.url }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useTheaterStore } from '@/store';

export default {
  setup() {
    const theaters = [
      {
        neve: 'Vígszínház',
        eloadasok: [
          { cim: 'A dzsungel könyve', url: 'https://www.jegy.hu/program/a-dzsungel-konyve-81963' },
          { cim: 'Barátom, Harvey', url: 'https://www.jegy.hu/program/baratom-harvey-131921' },
          { cim: 'Béranyák', url: 'https://www.jegy.hu/program/beranyak-139745' },
        ],
      },
    ];

    const theaterStore = useTheaterStore();
    const selectedTheater = ref({});
    const selectedShow = ref({});

    const selectTheaterAndShow = (theater, show) => {
      selectedTheater.value = theater;
      selectedShow.value = show;
      theaterStore.selectTheater(theater);
    };

    return { theaters, selectedTheater, selectedShow, selectTheaterAndShow };
  },
};
</script>
