<template>
  <section class="user-profile flex-center">
    <ProfilePictureComponent class="profile-picture" /> 
    <UserInfoComponent :username="user" />
  </section>
</template>

<script>
import ProfilePictureComponent from '@/assets/utilityComponents/ProfilePictureComponent.vue';
import UserInfoComponent from '@/assets/utilityComponents/UserInfoComponent.vue';


export default {
    name: "UserProfile",
    data() {
        return {
            user: "Elias M.",
        }
    },

    components: {
        ProfilePictureComponent,
        UserInfoComponent
    }
}
</script>


<!-- STYLE -->
<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';

.user-profile {
    gap: $_size-3;
}

.profile-picture {
    width: 30%;
    max-width: 100px;
}
</style>