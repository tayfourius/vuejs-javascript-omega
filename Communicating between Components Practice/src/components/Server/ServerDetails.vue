<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details: {‌{ status }}</p>
        <button @click="repairServer">Repair Server</button>
    </div>

</template>

<script>
import { eventBus } from '../../main';

export default {
    data: function() {
        return {
            status: '',
            serverNumber: ''
        }
    },
    created() {
        eventBus.$on('statusRequest', (status, serverNumber) => {
            this.status = status;
            this.serverNumber = serverNumber;
        });
    },
    methods: {
        repairServer() {
            this.status = 'Normal';
            eventBus.$emit('serverRepaired', this.status, this.serverNumber);
        }
    }
}
</script>