<template>

    <nav>
        <div class="title">
            <img src="../assets/Logo 1.png" alt="Logo">
            <span>Gente Prevalente</span>
        </div>
        <div class="search">
            <SearchIcon></SearchIcon>
            <span>Buscar...</span>
        </div>
        <div class="menu">
            <div class="menu_item">
                <ConfigIcon></ConfigIcon>
                <div class="has_notifications">
                    <span>Administración</span>
                    <div class="item_notification">
                        <span>2</span>
                    </div>
                </div>
            </div>
            <div class="menu_item">
                <BriefcaseIcon></BriefcaseIcon>
                <span>Empleo</span>
                <DownArrowIcon></DownArrowIcon>
            </div>
            <div class="menu_item">
                <ListIcon></ListIcon>
                <span>Mi CV</span>
            </div>
            <div class="menu_item">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#C4C4C4" />
                </svg>
                <span>Usuario</span>
                <DownArrowIcon></DownArrowIcon>
            </div>
        </div>
        <div class="alternative_menu">
            <div class="alternative_menu_item">
                <BurgerIcon></BurgerIcon>
            </div>
        </div>
    </nav>

</template>


<script>

//Iconos
import SearchIcon from './icons/SearchIcon.vue';
import ConfigIcon from './icons/ConfigIcon.vue';
import BriefcaseIcon from './icons/BriefcaseIcon.vue';
import ListIcon from './icons/ListIcon.vue';
import DownArrowIcon from './icons/DownArrowIcon.vue';
import BurgerIcon from './icons/BurgerIcon.vue';

export default {

    components: {
    //Iconos
    SearchIcon,
    ConfigIcon,
    BriefcaseIcon,
    ListIcon,
    DownArrowIcon,
    BurgerIcon
}
}

</script>