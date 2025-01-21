/*Memes.jsx*/
import './Memes.css';

const artTherapies = [
  { 
    name: "🎨 Painting Therapy", 
    description: "Express emotions through colors and brushstrokes, helping reduce stress and increase self-awareness."
  },
  { 
    name: "🎶 Music Therapy", 
    description: "Listening to or creating music can help with relaxation, emotional release, and cognitive improvement."
  },
  { 
    name: "🩰 Dance Therapy", 
    description: "Using movement and dance to enhance emotional well-being, self-expression, and body awareness."
  },
  { 
    name: "🎭 Drama Therapy", 
    description: "Acting and storytelling can provide a safe space for emotional healing and self-exploration."
  },
  { 
    name: "✍️ Poetry Therapy", 
    description: "Writing and reading poetry can help process emotions and improve mental clarity."
  },
  { 
    name: "🗿 Sculpting Therapy", 
    description: "Molding clay or carving materials can serve as a tactile way to relieve stress and improve focus."
  },
  { 
    name: "📸 Photography Therapy", 
    description: "Using photography as a means of self-expression and mindfulness, capturing moments that bring joy."
  },
  { 
    name: "🖼️ Collage Therapy", 
    description: "Creating collages with different materials can help organize thoughts and express feelings visually."
  },
  { 
    name: "🔶 Mandala Therapy", 
    description: "Coloring or designing mandalas helps in achieving mindfulness, focus, and relaxation."
  },
  { 
    name: "✒️ Calligraphy Therapy", 
    description: "Practicing calligraphy or hand lettering improves concentration and provides a calming effect."
  },
  { 
    name: "📖 Bibliotherapy", 
    description: "Using books, poetry, and stories for emotional healing and self-reflection."
  },
  { 
    name: "🎥 Film Therapy", 
    description: "Watching and analyzing movies to understand emotions and gain new perspectives."
  },
  { 
    name: "🎤 Singing Therapy", 
    description: "Vocalizing emotions through singing can help reduce stress and boost confidence."
  },
  { 
    name: "🧵 Textile Therapy", 
    description: "Sewing, knitting, or weaving promotes mindfulness and relaxation."
  },
  { 
    name: "🎭 Mask-Making Therapy", 
    description: "Creating masks helps explore hidden emotions and different aspects of identity."
  },
  { 
    name: "🖋️ Ink Art Therapy", 
    description: "Using ink and fluid painting techniques to express thoughts and emotions freely."
  },
  { 
    name: "🧩 Puzzle Art Therapy", 
    description: "Creating artwork by assembling different pieces helps with problem-solving and creativity."
  },
  { 
    name: "🌿 Nature Art Therapy", 
    description: "Using natural materials (leaves, flowers, stones) to create art and feel connected to nature."
  },
  { 
    name: "🎨 Finger Painting Therapy", 
    description: "Engaging in sensory painting can be a soothing way to express emotions."
  },
  { 
    name: "🔆 Light & Shadow Therapy", 
    description: "Using shadows, silhouettes, and light patterns to explore emotions and storytelling."
  }
];

export default function Therapies() {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">🎭 Art Therapies 🎨</h1>
      
      <div className="memes-container">
        {artTherapies.map((therapy, index) => (
          <div key={index} className="meme-card">
            <h5 className="text-2xl font-bold">{therapy.name}</h5>
            <p className="therapy-description">{therapy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
