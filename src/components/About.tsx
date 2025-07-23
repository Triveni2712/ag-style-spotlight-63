import { Button } from "@/components/ui/button";
import { Award, Heart, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Premium Quality",
      description: "We source only the finest materials and work with skilled artisans to create exceptional pieces."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sustainable Fashion",
      description: "Our commitment to sustainability drives every decision, from sourcing to production."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Timeless Design",
      description: "We create pieces that transcend trends, offering lasting style and versatility."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Crafting Excellence Since Day One
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AG Fashions was born from a passion for creating clothing that empowers individuals 
              to express their unique style. We believe fashion should be a celebration of 
              personality, crafted with care and attention to every detail.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our journey began with a simple vision: to make luxury fashion accessible while 
              maintaining the highest standards of quality and sustainability.
            </p>
            <Button variant="premium" size="lg">
              Discover Our Story
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-secondary mt-1">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;