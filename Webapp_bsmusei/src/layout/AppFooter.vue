<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.linkedin.com/in/andrea-mazzoletti-112a55164/" target="_blank" rel="noopener">Andrea Mazzoletti</a> & <a href="https://www.bresciamusei.com/" target="_blank" rel="noopener">Brescia Musei</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.linkedin.com/in/andrea-mazzoletti-112a55164/" class="nav-link" target="_blank" rel="noopener">Andrea Mazzoletti</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.bresciamusei.com/pag.asp?n=32&flag=stor&t=News" class="nav-link" target="_blank" rel="noopener">News</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                               class="nav-link" target="_blank" rel="noopener">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
