<template>
    <router-link
        :to="to"
        :class="['link', { active: isActive }]"
    >
        <i class="icon" :class="icon" />
        <transition name="fade">
            <span v-if="!collapsed">
                <slot />
            </span>
        </transition>
    </router-link>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

export default {
    props: {
        to: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return { isActive, collapsed }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.link {
    display: flex;
    align-items: center;
    height: 1.5em;
    position: relative;
    font-weight: 400;
    text-decoration: none;
    color: white;
    user-select: none;
    cursor: pointer;
    border-radius: 0.25em;
    padding: 0.4em;
    margin: 0.1em 0;

    &:hover {
        background-color: var(--sidebar-item-hover);
    }

    &.active {
        background-color: var(--sidebar-item-active);
    }

    .icon {
        flex-shrink: 0;
        width: 25px;
        margin-right: 10px;
    }
}
</style>
