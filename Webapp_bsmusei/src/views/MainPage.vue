<template>
    <div>
      <!-- TODO: Testa sta roba del set section per non far sfollare il bottone di scroll dio merda -->
      <home-section id="#home" v-on:oncroll="set_next_section('#home')"></home-section>
      <div v-if="current_section_id >= number_of_sections ">
        <base-button @click="navigate_to_top_section()" slot="title" id="btn-top">
          <i class="fa fa-arrow-up" ></i>
        </base-button>
      </div>
      <div v-if="current_section_id < number_of_sections ">
        <base-button @click="navigate_to_next_section()" slot="title" id="btn-bottom">
          <i class="fa fa-arrow-down" ></i>
        </base-button>
      </div>
      <tour-section id="#tour" v-on:scroll="set_next_section('#tour')"></tour-section>
      <museum-section id="#museum" v-on:scroll="set_next_section('#museum')"></museum-section>
      <author-section id="#author" v-on:scroll="set_next_section('#author')"></author-section>
      <contacts-section id="#contacts" v-on:scroll="set_next_section('#contacts')"></contacts-section>
    </div>
</template>
<script>
import HomeSection from "./components/HomeSection";
import TourSection from "./components/TourSection";
import AuthorSection from './components/AuthorSection.vue';
import MuseumSection from './components/MuseumSection.vue';
import ContactsSection from './components/ContactsSection.vue';
import SectionNavigation from '../mixins/SectionNavigation'


export default {
  name: "components",
  mixins:[SectionNavigation],
  components: {
    HomeSection,
    TourSection,
    MuseumSection,
    AuthorSection,
    ContactsSection,
    
  }
}
</script>

<style>

#btn-top {
    width: 50px;
    height: 50px;
    padding: 7px 10px;
    border-radius: 25px;
    font-size: 15px;
    text-align: center;
    border:none;
    color: black;
    background-color: white;
    position: fixed;
    top: 2%;
    right: 50%;
    z-index: 3000 
}

#btn-bottom {
    width: 50px;
    height: 50px;
    padding: 7px 10px;
    border-radius: 25px;
    font-size: 15px;
    text-align: center;
    border:none;
    color: black;
    background-color: white;
    position: fixed;
    bottom: 2%;
    right: 50%;
    z-index: 3000 
}

</style>

