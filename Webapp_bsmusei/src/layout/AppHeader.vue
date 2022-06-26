<template>
    <header class="header-global">
        <base-nav class="navbar-main" type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg" to="/" >
                <img src="https://www.bresciaatavola.it/wp-content/uploads/bresciaatavola.it/2017/03/LogoBSMusei.png" style="width: 150%; height: 50px;" alt="logo">
            </router-link>
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item mr-sm" @click="change_section_by_name('#home')">
                    <span class="text-black font-weight-bold clickable">Home</span>
                </li>
                <li class="nav-item mr-sm clickable" @click="change_section_by_name('#tour')">
                    <span class="text-black font-weight-bold ">Il tour</span>
                </li>
                <li class="nav-item mr-sm clickable" @click="change_section_by_name('#museum')">
                    <span class="text-black font-weight-bold ">Il museo</span>
                </li>
                <li class="nav-item mr-sm clickable" @click="change_section_by_name('#author')">
                    <span class="text-black font-weight-bold ">L'autore</span>
                </li>
                <li class="nav-item mr-sm clickable" @click="change_section_by_name('#contacts')">
                    <span class="text-black font-weight-bold ">Contatti</span>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.linkedin.com/in/andrea-mazzoletti-112a55164/"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Meet me on Linkedin!">
                        <i class="fa fa-linkedin-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Linkedin</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/AndreaMazzoletti"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Meet me on Github!">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import SectionNavigation from '../mixins/SectionNavigation'

export default {
  mixins:[SectionNavigation],
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
}
</script>
<style>
.clickable {
    cursor: pointer;
}
</style>
