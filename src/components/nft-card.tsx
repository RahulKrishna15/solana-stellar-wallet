
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

type NFTCardProps = {
  id: string;
  name: string;
  image: string;
  collection?: string;
  description?: string;
};

export function NFTCard({ id, name, image, collection, description }: NFTCardProps) {
  return (
    <Card className="solana-card overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-solana-primary/10">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {collection && (
          <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-xs font-medium">
            {collection}
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{name}</CardTitle>
      </CardHeader>
      {description && (
        <CardContent className="pb-2">
          <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      )}
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full border-solana-primary/20 hover:bg-solana-primary/10 transition-all duration-300 text-sm">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
