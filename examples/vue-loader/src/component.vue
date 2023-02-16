<template>
    <div>
       {{ message }}
    </div>
</template>

<script>
export default {
    name: 'component',
    data() {
        return {
            message: 'Hello world'
        };
    }
};
</script>