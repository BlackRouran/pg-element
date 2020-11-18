import PgButton from '../'


export  default {
    title: 'PgButton',
    component: PgButton
}

export const BaseButton = () => ({
    components: {PgButton},
    template: '<pg-button>click me</pg-button>'
})  