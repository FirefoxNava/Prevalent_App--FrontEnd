<template>

    <NavBarComp></NavBarComp>

    <section class="component_record">
        <a href="#" class="active_link">Administración</a>
        <p>/</p>
        <a href="#" class="current_link">Aprobación de Empresas</a>
    </section>
    <section class="responsive_arrows">
        <LeftArrowIcon></LeftArrowIcon>
        <p>Empresa 1 de 2 pendiente de aprobación</p>
        <RightArrowIcon></RightArrowIcon>
    </section>
    <section class="company_approval">
        <section class="logo_btns">
            <div class="companyLogo_container">
                <img src="../assets/Logo Negro 1.png" alt="Logo">
            </div>
            <div class="btns">
                <button>
                    <CheckIcon></CheckIcon>
                    <span>Aprobar Empresa</span>
                </button>
                <button>
                    <NoCheckIcon></NoCheckIcon>
                    <span>Rechazar Empresa</span>
                </button>
            </div>
        </section>
        <section class="company_info">
            <div class="info_item">
                <h4>Nombre de la Empresa</h4>
                <h3>PREVALENTWARE</h3>
            </div>
            <div class="info_item">
                <h4>Razón Social</h4>
                <h3>PREVALENTWARE S.A.S</h3>
            </div>
            <div class="info_item">
                <h4>Tipo de Identificación</h4>
                <h3>NIT</h3>
            </div>
            <div class="info_item">
                <h4>Identificación</h4>
                <h3>95524846846-7</h3>
            </div>
            <div class="info_item">
                <h4># de empleados</h4>
                <h3>1 - 10</h3>
            </div>
            <div class="info_item">
                <button>
                    <ClipIcon></ClipIcon>
                    <span>Ver archivos adjuntos</span>
                </button>
            </div>
        </section>
        <section class="files_list_responsive">
            <h3>Documentos Cargados</h3>
            <div class="file_item">
                <p>RUT PREVALENTWARE</p>
                <PdfIcon></PdfIcon>
            </div>
        </section>
    </section>
    <section class="company_arrows">
        <LeftArrowIcon></LeftArrowIcon>
        <p>Empresa 1 de 2 pendiente de aprobación</p>
        <RightArrowIcon></RightArrowIcon>
    </section>
    <div class="responsive_btns">
        <button>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M29.5312 15C29.5312 23.0254 23.0254 29.5312 15 29.5312C6.97459 29.5312 0.46875 23.0254 0.46875 15C0.46875 6.97459 6.97459 0.46875 15 0.46875C23.0254 0.46875 29.5312 6.97459 29.5312 15ZM13.3192 22.6942L24.1004 11.9129C24.4665 11.5468 24.4665 10.9532 24.1004 10.5871L22.7746 9.26133C22.4085 8.89518 21.8149 8.89518 21.4488 9.26133L12.6562 18.0538L8.55123 13.9488C8.18514 13.5827 7.59152 13.5827 7.22537 13.9488L5.89957 15.2746C5.53348 15.6407 5.53348 16.2343 5.89957 16.6004L11.9933 22.6941C12.3595 23.0603 12.953 23.0603 13.3192 22.6942Z"
                    fill="#14CF10" />
            </svg>
            <span>Aprobar Empresa</span>
        </button>
        <button>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15 0.46875C6.97266 0.46875 0.46875 6.97266 0.46875 15C0.46875 23.0273 6.97266 29.5312 15 29.5312C23.0273 29.5312 29.5312 23.0273 29.5312 15C29.5312 6.97266 23.0273 0.46875 15 0.46875ZM22.125 18.8145C22.4004 19.0898 22.4004 19.5352 22.125 19.8105L19.8047 22.125C19.5293 22.4004 19.084 22.4004 18.8086 22.125L15 18.2812L11.1855 22.125C10.9102 22.4004 10.4648 22.4004 10.1895 22.125L7.875 19.8047C7.59961 19.5293 7.59961 19.084 7.875 18.8086L11.7188 15L7.875 11.1855C7.59961 10.9102 7.59961 10.4648 7.875 10.1895L10.1953 7.86914C10.4707 7.59375 10.916 7.59375 11.1914 7.86914L15 11.7188L18.8145 7.875C19.0898 7.59961 19.5352 7.59961 19.8105 7.875L22.1309 10.1953C22.4062 10.4707 22.4062 10.916 22.1309 11.1914L18.2812 15L22.125 18.8145Z"
                    fill="#D10B0B" />
            </svg>
            <span>Rechazar Empresa</span>
        </button>
    </div>

</template>


<script>

//Componentes
import NavBarComp from '../components/NavBarComp.vue';
//Iconos
import LeftArrowIcon from '../components/icons/LeftArrowIcon.vue';
import RightArrowIcon from '../components/icons/RightArrowIcon.vue';
import CheckIcon from '../components/icons/CheckIcon.vue';
import NoCheckIcon from '../components/icons/NoCheckIcon.vue';
import ClipIcon from '../components/icons/ClipIcon.vue';
import PdfIcon from '../components/icons/PdfIcon.vue';

export default {

    components: {
    NavBarComp,
    //Iconos
    LeftArrowIcon,
    RightArrowIcon,
    CheckIcon,
    NoCheckIcon,
    ClipIcon,
    PdfIcon,
}
}

</script>