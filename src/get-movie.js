import black from './images/black.jpg';
import life from './images/life.jpg';
import patrick from './images/patrick.jpg';
import little from './images/little.jpg';
import traitors from './images/traitors.jpg';
import viking from './images/viking.jpg';



export default function getMovies() {
    return [
        { 
            id: 'viking', name: 'VIKINGS', logo: viking ,
            synopsis: (
                'Viking Ragnar Lothbrok is a young farmer and family man who'+
                 'is frustrated by the policies of Earl Haraldson, his local'+
                 'chieftain who sends his Viking raiders east to the Baltic'+
                  'states and Russia, whose residents are as poor as the'+
                  ' Norsemen. Ragnar wants to head west, across the ocean,'+
                  ' to discover new civilizations.' )
        },
        { 
            id: 'black', name: 'Black Book', logo: black,
            synopsis: (
             'After narrowly escaping death, young Rachel Rosenthal (Carice'+
            'van Houten)becomes part of the Jewish resistance, assuming the '+
            'name Ellis de Vries.' )
        },
        { 
            id: 'traitors', name: 'Traitors', logo: traitors,
            synopsis: (
                'In 1945 London, Feef Symonds is seduced by a rogue US agent'+
                'into a dangerous mission spying on her own country. Her task'+
                ' is to uncover Russian infiltration in the heart of the'+
                ' British Government.')
         },
        {
             id: 'life', name: 'Life On Mars', logo: life,
             synopsis: (
                'Months after a near-fatal car crash sends him hurtling back'+
                'to the year 1973, police Detective Sam Tyler begins to give'+
                'up hope that he will return to his former life. Nonetheless,'+
                'he rises through the ranks of the department, despite clashes'+
                 'with his morally lax boss.')
        },
        { 
            id: 'patrick', name: 'Patrick Melrose', logo: patrick,
            synopsis: (
                'Patrick Melrose is a man from a very privileged yet traumatic childhood'+
                ' in the 1980s. "Patrick Melrose" is a five-part limited series based on'+
                'the semi-autobiographical novels by Edward St.Aubyn from the 1980s'+
                'through early 2000s.' )
        },
        { 
            id: 'little', name: 'Little Britain', logo: little,
            synopsis: (
                'Comic actors David Walliams and Matt Lucas take viewers on'+
                'a cockeyed tour of Great Britain via a gallery of eccentric'+
                ' characters.')
         }
    ]
}

