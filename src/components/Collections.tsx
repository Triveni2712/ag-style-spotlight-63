import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import casualWear from "@/assets/casual-wear.jpg";
import formalAttire from "@/assets/formal-attire.jpg";
import eveningWear from "@/assets/evening-wear.jpg";
import sportswear from "@/assets/sportswear.jpg";
import winterCollection from "@/assets/winter-collection.jpg";
import summerEssentials from "@/assets/summer-essentials.jpg";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Casual Wear",
      description: "Comfortable everyday essentials for modern living",
      image: casualWear,
      price: "From $45"
    },
    {
      id: 2,
      title: "Formal Attire",
      description: "Sophisticated pieces for professional occasions",
      image: formalAttire,
      price: "From $149"
    },
    {
      id: 3,
      title: "Evening Wear",
      description: "Elegant designs for special events and parties",
      image: eveningWear,
      price: "From $199"
    },
    {
      id: 4,
      title: "Sportswear",
      description: "Active wear for fitness and outdoor activities",
      image: sportswear,
      price: "From $39"
    },
    {
      id: 5,
      title: "Winter Collection",
      description: "Warm and stylish clothing for cold weather",
      image: winterCollection,
      price: "From $89"
    },
    {
      id: 6,
      title: "Summer Essentials",
      description: "Light and breezy outfits for warm days",
      image: summerEssentials,
      price: "From $29"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Featured Collections
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Carefully curated pieces that embody sophistication and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {collections.map((collection, index) => (
            <Card 
              key={collection.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-luxury transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="premium" size="sm">
                    View Collection
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{collection.title}</h3>
                <p className="text-muted-foreground mb-4">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-secondary">{collection.price}</span>
                  <Button variant="ghost" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="px-12">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;