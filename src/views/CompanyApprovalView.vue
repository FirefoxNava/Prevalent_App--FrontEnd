<template>

    <NavBarComp></NavBarComp>

    <FilesPopUpComp v-if="filesPopUpState" :files="files" @disableFilesPopUp="disableFilesPopUp()"></FilesPopUpComp>

    <section class="component_record">
        <a class="active_link" v-on:click="goToHome()">Administración</a>
        <p>/</p>
        <a class="current_link">Aprobación de Empresas</a>
    </section>
    <section class="responsive_arrows">
        <LeftArrowIcon v-on:click="changeCompany(false)"></LeftArrowIcon>
        <p>Empresa {{ actualIndex + 1 }} de {{ companies.length }} pendiente de aprobación</p>
        <RightArrowIcon v-on:click="changeCompany(true)"></RightArrowIcon>
    </section>
    <section class="company_approval">
        <section class="logo_btns">
            <div class="companyLogo_container">
                <img :src="companyData.logo" alt="Logo">
            </div>
            <div class="btns">
                <button v-on:click="changeCompanyState(true)">
                    <CheckIcon></CheckIcon>
                    <span>Aprobar Empresa</span>
                </button>
                <button v-on:click="changeCompanyState(false)">
                    <NoCheckIcon></NoCheckIcon>
                    <span>Rechazar Empresa</span>
                </button>
            </div>
        </section>
        <section class="company_info">
            <div class="info_item">
                <h4>Nombre de la Empresa</h4>
                <h3>{{ companyData.nombre }}</h3>
            </div>
            <div class="info_item">
                <h4>Razón Social</h4>
                <h3>{{ companyData.razonSocial }}</h3>
            </div>
            <div class="info_item">
                <h4>Tipo de Identificación</h4>
                <h3>{{ companyData.nit }}</h3>
            </div>
            <div class="info_item">
                <h4>Identificación</h4>
                <h3>{{ companyData.id }}</h3>
            </div>
            <div class="info_item">
                <h4># de empleados</h4>
                <h3>{{ companyData.numeroEmpleados }}</h3>
            </div>
            <div class="info_item">
                <button v-on:click="showFilesPopUp()">
                    <ClipIcon></ClipIcon>
                    <span>Ver archivos adjuntos</span>
                </button>
            </div>
        </section>
        <section class="files_list_responsive">
            <h3>Documentos Cargados</h3>
            <div class="file_item" v-for="item in files" :key="item" v-on:click="downloadFile(item)">
                <p>{{ item }}</p>
                <PdfIcon></PdfIcon>
            </div>
        </section>
    </section>
    <section class="company_arrows">
        <LeftArrowIcon v-on:click="changeCompany(false)"></LeftArrowIcon>
        <p>Empresa {{ actualIndex + 1 }} de {{ companies.length }} pendiente de aprobación</p>
        <RightArrowIcon v-on:click="changeCompany(true)"></RightArrowIcon>
    </section>
    <div class="responsive_btns">
        <button v-on:click="changeCompanyState(true)">
            <CheckIcon></CheckIcon>
            <span>Aprobar Empresa</span>
        </button>
        <button v-on:click="changeCompanyState(false)">
            <NoCheckIcon></NoCheckIcon>
            <span>Rechazar Empresa</span>
        </button>
    </div>

</template>


<script>

//Librerias
import axios from 'axios';
import swal from 'sweetalert'
import fileDownload from 'js-file-download'
//Componentes
import NavBarComp from '../components/NavBarComp.vue';
import FilesPopUpComp from '../components/FilesPopUpComp.vue';
//Iconos
import LeftArrowIcon from '../components/icons/LeftArrowIcon.vue';
import RightArrowIcon from '../components/icons/RightArrowIcon.vue';
import CheckIcon from '../components/icons/CheckIcon.vue';
import NoCheckIcon from '../components/icons/NoCheckIcon.vue';
import ClipIcon from '../components/icons/ClipIcon.vue';
import PdfIcon from '../components/icons/PdfIcon.vue';

export default {

    components: {
        //Componentes
        NavBarComp,
        FilesPopUpComp,
        //Iconos
        LeftArrowIcon,
        RightArrowIcon,
        CheckIcon,
        NoCheckIcon,
        ClipIcon,
        PdfIcon,
    },
    data() {
        return {
            companies: [],
            companyData: {},
            files: [],
            url: import.meta.env.VITE_API_ROUTE,
            actualIndex: 0,
            filesPopUpState: false
        }
    },
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        async getCompanies() {
            await axios.get(import.meta.env.VITE_API_ROUTE + '/empresas/all').then((response) => {
                if (response.status === 200) {
                    this.companies = response.data.empresas
                    this.setCompanyData(0)
                }
            }).catch((error) => {
                swal("Operación Fallida", "Se ha generado un error al solicitar la información", "error");
                console.log(error);
            });
        },
        setCompanyData(index) {
            this.companyData = this.companies[index]
            this.files = this.companyData.archivos.split("/")
        },
        changeCompany(action) {
            const limit = this.companies.length - 1

            if (action && this.actualIndex < limit) {
                this.actualIndex++
                this.setCompanyData(this.actualIndex)
            } else if (!action && this.actualIndex > 0) {
                this.actualIndex--
                this.setCompanyData(this.actualIndex)
            }
        },
        showFilesPopUp() {
            this.filesPopUpState = true;
        },
        disableFilesPopUp(n) {
            this.filesPopUpState = n;
        },
        downloadFile(file) {
            axios.get(import.meta.env.VITE_API_ROUTE + '/empresas/getFIle/' + file, { responseType: 'blob' }).then((response) => {
                if (response.status === 200) {
                    fileDownload(response.data, file)
                }
            }).catch((error) => {
                swal("Operación Fallida", "Se ha generado un error al solicitar la información", "error");
                console.log(error);
            });
        },
        changeCompanyState(action) {

            let state = {
                estado: null
            }

            let texto = null

            if (action) {
                state.estado = true
                texto = "Aprovada"
            } else {
                state.estado = false
                texto = "Rechazada"
            }

            axios.post(import.meta.env.VITE_API_ROUTE + '/empresas/update/' + this.companyData.id, state).then((response) => {
                if (response.status === 201) {
                    if(response.data.empresa.estado){
                        swal(this.companyData.nombre, "Estado Actual : " + texto, "success")
                    } else {
                        swal(this.companyData.nombre, "Estado Actual : " + texto, "error")
                    }
                }
            }).catch((error) => {
                swal("Operación Fallida", "Se ha generado un error al solicitar la información", "error");
                console.log(error);
            });
        }
    },
    mounted() {
        this.getCompanies()
    }
}

</script>