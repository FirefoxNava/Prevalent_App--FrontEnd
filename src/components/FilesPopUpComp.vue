<template>

    <div class="files_back">
        <section class="files_container">
            <div class="files_title">
                <h3>Documentos Cargados</h3>
                <CloseIcon></CloseIcon>
            </div>
            <div class="files_list">
                <div class="file_item">
                    <p>RUT PREVALENTWARE</p>
                    <PdfIcon></PdfIcon>                       
                </div>
            </div>
        </section>
    </div>

</template>


<script>

//Iconos
import CloseIcon from "./icons/CloseIcon.vue";
import PdfIcon from "./icons/PdfIcon.vue";

export default {

    components: {
    //Iconos
    CloseIcon,
    PdfIcon
}
}

</script>