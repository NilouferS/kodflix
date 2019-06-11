import avenger from './images/avengers.jpg';
import fast from './images/fast.jpg';
import harry from './images/harry.jpg';
import twlight from './images/twlight.jpg';
import nemo from './images/nemo.jpg';
import purge from './images/purge.jpg';



export default function getMovies() {
    return [
        { id: 'purge', name: 'The Purge', logo: purge },
        { id: 'avenger', name: 'Avengers', logo: avenger },
        { id: 'harry', name: 'Harry Potter', logo: harry },
        { id: 'nemo', name: 'Finding Nemo', logo: nemo },
        { id: 'twlight', name: 'Twlight', logo: twlight },
        { id: 'fast', name: 'Fast and Furious', logo: fast }
    ]
}