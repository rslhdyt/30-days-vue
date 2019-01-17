new Vue({
    el: '#app',
    data: {
        user: {
            name: 'Foo',
            gender: 'Male',
            email: 'foo@bar.com',
            city: 'foo bar avenue'
        }
    },
    methods: {
        changeGender() {
            let currentGender = this.user.gender
            this.user.gender = currentGender == 'Alpha Male' ? 'Male' : 'Alpha Male'
        }
    }
})