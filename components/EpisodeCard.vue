<template>
    <div class="card">
        <div class="card__img">
            <img :src="episode.image" :alt="episode.title" class="">
        </div>
        <div class="card__content">
            <div class="card__text">
                <p class="small-paragraph">{{ episode.guests }}</p>
                <p class="bold-paragraph ">{{ episode.title }}</p>
                <p class="paragraph"> {{ episode.description }}</p>
            </div>
            <div class="btn-wrapper">
                <a :href="episode.link" target="_blank">
                    <RegularButton text="Listen Here" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        episode: Object,
    }
}
</script>

<style lang="scss" scoped>
.card {
    background: $white;
    text-align: left;
    border-radius: 10px;
    box-shadow: $box-shadow;
    max-width: 350px;

    &__img {
        display: grid;
        place-items: center;
        
        img {
            border-radius: 10px 10px 0 0;
        }
    }

    &__content {
        padding: 1rem;
        margin-top: 1rem;

        .small-paragraph {
            font-size: clamp(0.85rem, 2vw, 0.9rem);
            margin-bottom: 0.5rem;
        }

        .bold-paragraph {
            font-weight: 600;
            font-size: clamp(1rem, 2vw, 1.25rem);
            margin-bottom: 0.5rem;
        }

        .paragraph {
            overflow:hidden;
            line-height: 1.6;
            max-height: 8rem;
            -webkit-box-orient: vertical;
            display: block;
            display: -webkit-box;
            overflow: hidden !important;
            text-overflow: ellipsis;
            -webkit-line-clamp: 4;
            margin-bottom: 0.5rem;
        }
    }
}
</style>