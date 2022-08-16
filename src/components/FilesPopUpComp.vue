<template>

    <div class="files_back">
        <section class="files_container">
            <div class="files_title">
                <h3>Documentos Cargados</h3>
                <CloseIcon @click="$emit('disableFilesPopUp', false)"></CloseIcon>
            </div>
            <div class="files_list">
                <div class="file_item" v-for="item in files" :key="item" v-on:click="downloadFile(item)">
                    <p>{{ item }}</p>
                    <PdfIcon></PdfIcon>
                </div>
            </div>
        </section>
    </div>

</template>


<script>

//Librerias
import axios from 'axios';
import swal from 'sweetalert'
import fileDownload from 'js-file-download'

//Iconos
import CloseIcon from "./icons/CloseIcon.vue";
import PdfIcon from "./icons/PdfIcon.vue";

export default {

    components: {
        //Iconos
        CloseIcon,
        PdfIcon
    },
    props: ["files"],
    methods: {
        downloadFile(file) {
            axios.get(import.meta.env.VITE_API_ROUTE + '/empresas/getFIle/' + file, { responseType: 'blob' }).then((response) => {
                if (response.status === 200) {
                    fileDownload(response.data, file)
                }
            }).catch((error) => {
                swal("Operación Fallida", "Se ha generado un error al solicitar la información", "error");
                console.log(error);
            });
        }
    },
}

</script>