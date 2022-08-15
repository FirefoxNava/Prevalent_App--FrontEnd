<template>
    <NavBarComp></NavBarComp>
    <section class="home">
        <div class="card">
            <div class="card_title">
                <div class="img_container">
                    <FactoryIcon></FactoryIcon>
                </div>
                <h2>Solicitudes de creación de empresas</h2>
            </div>
            <div class="card_info">
                <ClockIcon></ClockIcon>
                <span>2 Solicitudes sin tratar</span>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <div class="img_container">
                    <GraphIcon></GraphIcon>
                </div>
                <h2>Indicadores</h2>
            </div>
            <div class="card_info">
                <ClockIcon></ClockIcon>
                <span>Visitado por última vez: 31/01/2020</span>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <div class="img_container">
                    <UserIcon></UserIcon>
                </div>
                <h2>Incripción de empleados en empresas</h2>
            </div>
            <div class="card_info">
                <ClockIcon></ClockIcon>
                <span>3 usuarios sin empresa registrada</span>
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                <div class="img_container">
                    <UserConfIcon></UserConfIcon>
                </div>
                <h2>Gestión de usuarios</h2>
            </div>
            <div class="card_info">
                <ClockIcon></ClockIcon>
                <span>532 usuarios activos en la plataforma</span>
            </div>
        </div>

    </section>

</template>

<script>

//Componentes
import NavBarComp from '../components/NavBarComp.vue';
//Iconos
import FactoryIcon from '../components/icons/FactoryIcon.vue';
import ClockIcon from '../components/icons/ClockIcon.vue';
import GraphIcon from '../components/icons/GraphIcon.vue';
import UserIcon from '../components/icons/UserIcon.vue';
import UserConfIcon from '../components/icons/UserConfIcon.vue';

export default {

    components: {
    //Componentes
    NavBarComp,
    //Iconos
    FactoryIcon,
    ClockIcon,
    GraphIcon,
    UserIcon,
    UserConfIcon
}
}

</script>