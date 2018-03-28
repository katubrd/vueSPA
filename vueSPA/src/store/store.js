import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';


Vue.use(Vuex);
Vue.use(VueRouter);

export const store = new Vuex.Store({
    state: {
        stages: ['technology', 'bussines', 'workshops'],
        view: 'technology',
        speakers: [{
                // id: '',
                name: 'Andres Abogabir',
                company: 'California Institute of the Arts',
                speaches: [{
                    title: 'Ideas from the History of Graphic Design',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/man1.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
            { // id: '',
                name: 'Marc-Olivier Jodoin',
                company: 'Macquarie University',
                speaches: [{
                    title: 'Big History: Connecting Knowledge',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/man2.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
            { // id: '',
                name: 'Annie Spratt',
                company: 'University of Virginia',
                speaches: [{
                    title: 'The Modern World, Part Two: Global History since 1910',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/woman1.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
            { // id: '',
                name: 'Joshua Earle',
                company: 'The University of Edinburgh',
                speaches: [{
                    title: 'Philosophy and the Sciences: Introduction to the Philosophy of Physical Sciences',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/man3.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
            { // id: '',
                name: 'Jodie Morgan',
                company: 'University of Pennsylvania',
                speaches: [{
                    title: 'The Modern and the Postmodern',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/woman2.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
            { // id: '',
                name: 'Yiran Ding',
                company: 'Yale University',
                speaches: [{
                    title: 'Music and Social Action',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/woman3.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
            { // id: '',
                name: 'Linda Xu',
                company: 'Wesleyan University',
                speaches: [{
                    title: 'How to Change the World',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/woman4.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
            { // id: '',
                name: 'Jeremy Galliani',
                company: 'The University of North Carolina at Chapel Hill',
                speaches: [{
                    title: 'Reasoning Across the Disciplines',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/man4.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
            { // id: '',
                name: 'Viktor Nikolaienko',
                company: 'Duke University',
                speaches: [{
                    title: 'Bioelectricity: The Mechanism of Origin of Extracellular Potentials',
                    stage: 'Technology',
                    day: '1',
                    houres: '11.30',
                    favorite: false
                }],
                speakerImage: require('../assets/speakers/man5.png'),
                about: 'The former Program Director and current faculty in the Graphic Design Program at CalArts. Her design office, LSD (Louise Sandhaus Design), partners with multiple disciplines to realize interpretive projects from the simple to the complex, regardless of media. Clients include Los Angeles County Museum of Art, UCLA Hammer Museum, City of Los Angeles Cultural Affairs Department, Los Angeles Natural History Museum, Los Angeles World Airports (LAX) and Association of Children’s Museums.'
                    // links: [{}]
            },
        ]
    },
    getters: {
        filterSpeakersByStage: state => speakers => state.speakers.filter(speaker => speaker.speaches.filter(speach => speach.stage === stage))
    },
    modules: {

    }
})
