/*Memes.jsx*/
import './Memes.css';

const artTherapies = [
  { image: "painting.jpg",
    name: "🎨 Painting Therapy", 
    description: "Express emotions through colors and brushstrokes, helping reduce stress and increase self-awareness."
  },
  { image: "music.jpg",
    name: "🎶 Music Therapy", 
    description: "Listening to or creating music can help with relaxation, emotional release, and cognitive improvement."
  },
  { image: "danc.png",
    name: "🩰 Dance Therapy", 
    description: "Using movement and dance to enhance emotional well-being, self-expression, and body awareness."
  },
  { image: "drama.jpg",
    name: "🎭 Drama Therapy", 
    description: "Acting and storytelling can provide a safe space for emotional healing and self-exploration."
  },
  { image: "poetry.jpg",
    name: "✍️ Poetry Therapy", 
    description: "Writing and reading poetry can help process emotions and improve mental clarity."
  },
  { image: "sculping.jpg",
    name: "🗿 Sculpting Therapy", 
    description: "Molding clay or carving materials can serve as a tactile way to relieve stress and improve focus."
  },
  { image: "photography.jpg",
    name: "📸 Photography Therapy", 
    description: "Using photography as a means of self-expression and mindfulness, capturing moments that bring joy."
  },
  { image: "collage.webp",
    name: "🖼️ Collage Therapy", 
    description: "Creating collages with different materials can help organize thoughts and express feelings visually."
  },
  { image: "mandala.webp",
    name: "🔶 Mandala Therapy", 
    description: "Coloring or designing mandalas helps in achieving mindfulness, focus, and relaxation."
  },
  { image: "calligraphy.webp",
    name: "✒️ Calligraphy Therapy", 
    description: "Practicing calligraphy or hand lettering improves concentration and provides a calming effect."
  },
  { image: "biblio.jpg",
    name: "📖 Bibliotherapy", 
    description: "Using books, poetry, and stories for emotional healing and self-reflection."
  },
  { image: "film.jpg",
    name: "🎥 Film Therapy", 
    description: "Watching and analyzing movies to understand emotions and gain new perspectives."
  },
  { image: "singing.jpg",
    name: "🎤 Singing Therapy", 
    description: "Vocalizing emotions through singing can help reduce stress and boost confidence."
  },
  { image: "textile.webp",
    name: "🧵 Textile Therapy", 
    description: "Sewing, knitting, or weaving promotes mindfulness and relaxation."
  },
  { image: "maskmaking.webp",
    name: "🎭 Mask-Making Therapy", 
    description: "Creating masks helps explore hidden emotions and different aspects of identity."
  },
  { image: "inkart.jpg",
    name: "🖋️ Ink Art Therapy", 
    description: "Using ink and fluid painting techniques to express thoughts and emotions freely."
  },
  { image: "puzzle.webp",
    name: "🧩 Puzzle Art Therapy", 
    description: "Creating artwork by assembling different pieces helps with problem-solving and creativity."
  },
  { image: "nature.jpg",
    name: "🌿 Nature Art Therapy", 
    description: "Using natural materials (leaves, flowers, stones) to create art and feel connected to nature."
  },
  { image: "fingerpainting.jpg",
    name: "🎨 Finger Painting Therapy", 
    description: "Engaging in sensory painting can be a soothing way to express emotions."
  },
  { image: "lightandshadow.jpg",
    name: "🔆 Light & Shadow Therapy", 
    description: "Using shadows, silhouettes, and light patterns to explore emotions and storytelling."
  }
];

const Memes =()=>{
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">🎭 Art Therapies 🎨</h1>
      
      <div className="memes-container">
        {artTherapies.map((therapy, index) => (
          <div key={index} className="meme-card">
            <img 
              src={therapy.image} 
              alt={therapy.name} 
              className="meme-card-image"
            />
            <h5 className="text-2xl font-bold">{therapy.name}</h5>
            <p className="therapy-description">{therapy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Memes