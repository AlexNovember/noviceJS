<template>
  <!-- <div>
    <h1> {{ city }} </h1>
    <input type="text" v-model="city" placeholder='Enter'>
    <div v-if="showSuggestions && city.length > 0">
        <ul>
          <li v-for="(city, index) in filteredCities" :key="index" @click="selectCity(city)">{{ city }}</li>
        </ul>
    <button @click="getWeather()">Enter</button>

  </div> -->
  
  <div>
    <input v-model="city" @input="searchCity" placeholder="Введите название города">
    <div v-if="showSuggestions && city.length > 0">
      <ul>
        <li v-for="(city, index) in filteredCities" :key="index" @click="selectCity(city)">{{ city }}</li>
      </ul>
    </div>
    <!-- <button @click="getWeather">Получить погоду</button> -->
    <!-- <div v-if="weather">
      <p>Температура: {{ weather.main.temp }} °C</p>
      <p>Описание: {{ weather.weather[0].description }}</p>
    </div> -->
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            id: 'ef729581240cd45a5d2d73ed920e516a',
            city: "",
            weather: null,
            showSuggestions: false,
            cities: [],
        }
    },
    methods: {    
    //     async getWeather() {
    //   try {
    //     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.id}`);
    //     this.weather = response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    async searchCity() {
      if (this.city.length > 0) {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.id}`);
          this.cities = response.data.map(city => city.name);
          this.showSuggestions = true;
        } catch (error) {
          console.error(error);
        }
      } else {
        this.showSuggestions = false;
      }
    },
    selectCity(selectedCity) {
      this.city = selectedCity;
      this.showSuggestions = false;
    },
    // getWeather1() {           
    //         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=ef729581240cd45a5d2d73ed920e516a`).then (response => this.weather = response.data);  
      
    // },
  },
};
    
//          
//     },
// }
//     }
// }
</script>
