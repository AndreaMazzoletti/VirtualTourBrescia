<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape" :style="{backgroundImage:`url(https://www.bresciatourism.it/content/uploads/2017/04/arte-cultura.jpg`}">
         
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-sm">
                        <img src="img/logo-ebreo.png" style="width: 400px;" class="img-fluid">
                        <p class="lead text-white font-weight-bold mt-4 mb-5">Il tour virtuale del museo di Santa Giulia</p>
                        <div class="btn-wrapper">
                            <base-button tag="a"
                                         @click="open_tour_window()"
                                         class="mb-3 mb-sm-0"
                                         type="white"
                                         icon="ni ni-button-play">
                                Comincia
                            </base-button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around stars-and-coded pt-lg">
                    <div class="col-sm-4">
                        <span class="text-white alpha-7 ml-3">Meet me on</span>
                        <a href="https://github.com/AndreaMazzoletti" target="_blank" title="Support us on Github">
                            <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px">
                        </a>
                    </div>
                    

                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Coded by</span>
                        <a  class="text-white alpha-7" href="https://www.linkedin.com/in/andrea-mazzoletti-112a55164/" target="_blank">
                            Andrea Mazzoletti
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

data() {
    return {
        link_to_tour: "http://localhost:3000/index.html"
    }
},
methods: {
    open_tour_window(){
        window.open(this.link_to_tour)
    }
}

}
</script>

