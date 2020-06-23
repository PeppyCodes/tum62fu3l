new Vue({
    el: '#site_info',
    data: {
        website_title: 'Tummy Fuel',
        website_subtitle: 'Good Food is Good Mood'
    }
})

new Vue({
    el: "#gallery_vue",
    data: {
        galleries: [
            { image: 'images/food-3.jpg'},

        ]
    }
});


new Vue({
    el: '#colorlib-hero',
    data: {
        slides: [
            {h1: 'Yogesh', h2: 'Is the Best', image: 'background-image: url(images/img_bg_1.jpg);', button:'Start Learning Now!'},
            {h1: 'Yogesh', h2: 'Is the Best', image: 'background-image: url(images/img_bg_5.jpg);', button:'Start Learning Now!'},
            {h1: 'Yogesh', h2: 'Is the Best', image: 'background-image: url(images/img_bg_3.jpg);', button:'Start Learning Now!'},
            {h1: 'Yogesh', h2: 'Is the Best', image: 'background-image: url(images/img_bg_4.jpg);', button:'Start Learning Now!'},
        ]
    }
})

new Vue({
    el: '#vue-testimonial',
    data: {
        testimonials: [
            {comment: 'Far far away, behind the word mountains', image: 'background-image: url(images/person1.jpg);', name:'Student'},
            {comment: 'Far far away, behind the word mountains', image: 'background-image: url(images/person2.jpg);', name:'Student'},
            {comment: 'Far far away, behind the word mountains', image: 'background-image: url(images/person3.jpg);', name:'Student'},
            {comment: 'Far far away, behind the word mountains', image: 'background-image: url(images/person4.jpg);', name:'Student'},
            {comment: 'Far far away, behind the word mountains', image: 'background-image: url(images/person5.jpg);', name:'Student'},
        ]
    }
})
