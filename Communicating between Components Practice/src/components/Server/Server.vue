<template>
    <div @click="serverStatus">
        <li>
            Server #{‌{ serverNumber }}
            Server: {‌{ status }}
        </li>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    props: {
        serverNumber: Number,
        status: String
    },
    methods: {
        serverStatus() {
            eventBus.$emit('statusRequest', this.status, this.serverNumber);
        }
    },
    created() {
        eventBus.$on('serverRepaired', (status, serverNumber) => {
            if (this.serverNumber == serverNumber) {
                this.status = status;
            } 
        });
    }
}
</script>