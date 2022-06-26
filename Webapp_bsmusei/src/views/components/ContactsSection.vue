<template>
    <section class="section section-components pb-0" id="section-components">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <!-- Basic elements -->
                    <h2 class="mb-5">
                        <span>Contatti</span>
                    </h2>
                    <!-- Card -->
                    <div class="row">
                        <div class="col-md-4 mb-5 mb-md-0">
                          <h4>Brescia Musei</h4>
                            <p class="mt-5">
                              <i class="fa fa-globe mr-2"/>
                              www.bresciamusei.com
                            </p>
                            <p class="mt-2">
                              <i class="fa fa-envelope mr-2"/>
                              bresciamusei@gmail.com
                            </p>
                            <h4 class="mt-5">Andrea Mazzoletti</h4>
                            <p class="mt-5">
                              <i class="fa fa-envelope mr-2"/>
                              andrea.mazzoletti.work@gmail.com
                            </p>
                            <p class="mt-2">
                              <i class="fa fa-linkedin-square mr-2"/>
                              https://www.linkedin.com/in/andrea-mazzoletti-112a55164/
                            </p>
                            <p class="mt-2">
                              <i class="fa fa-github mr-2"/>
                              https://github.com/AndreaMazzoletti
                            </p>
                        </div>
                        <hr class="vertical-hr">
                        <div class="col-md-4 mb-5 mb-lg-0">
                            <h3 class="mt-5" style="text-align:center;">Scrivici qualcosa!</h3>
                            <div class="mt-5" style="left: 50%;">
                              <base-input class="my-input"
                                          placeholder="Il tuo nome..."
                                          addon-left-icon="fa fa-address-book">
                              </base-input>
                              <base-input class="my-input"
                                          placeholder="Il tuo indirizzo email..."
                                          addon-left-icon="fa fa-envelope">
                              </base-input>
                               <base-input  class="my-input mt-4">
                                      <textarea class=" my-input form-control form-control-alternative" name="name" rows="4"
                                                cols="80" placeholder="Scrivici il tuo messaggio..."></textarea>
                              </base-input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
export default {};
</script>
<style>
.vertical-hr{ 
    border:         none;
    border-left:    1px solid hsla(200, 10%, 50%,100);
    height:         50vh;
    width:          1px;       
}
.my-input {
  border: 1px solid; 
} 
</style>
