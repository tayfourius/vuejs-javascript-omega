<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group list-unstyled">
            <app-single-server 
                class="list-group-item"
                v-for="index in servers" 
                v-bind:key="index.id"
                :serverNumber="index.id"
                :status="index.status">
            </app-single-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        components: {
            'app-single-server': Server
        },
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Damaged' },
                    { id: 2, status: 'Critical' },
                    { id: 3, status: 'Unknown' },
                    { id: 4, status: 'Normal' }
                ]
            };
        }
    }
</script>