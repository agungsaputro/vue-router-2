<template>
    <header>
        <div class="flex justify-between items-center py-4 bg-blue-900">
            <div class="flex-shrink-0 ml-10 cursor-pointer">
                <i class="fas fa-drafting-compass fa-2x text-orange-500"></i>
                <span class="ml-1 text-3xl text-blue-200 font-semibold">Vue Router</span>
            </div>
            <i class="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>