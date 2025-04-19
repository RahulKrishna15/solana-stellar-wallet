
import { Header } from "@/components/header";
import { NFTCard } from "@/components/nft-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const mockNfts = [
  {
    id: '1',
    name: 'Cosmic Horizon #01',
    image: 'https://images.unsplash.com/photo-1635236357577-153adcd28ffb?q=80&w=2070&auto=format&fit=crop',
    collection: 'Cosmic Horizons',
    description: 'A mesmerizing view of the cosmic horizon, where stars are born.'
  },
  {
    id: '2',
    name: 'Digital Dream #42',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
    collection: 'Digital Dreams',
    description: 'Abstract digital artwork representing the dream state of AI.'
  },
  {
    id: '3',
    name: 'Neon Genesis #7',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1935&auto=format&fit=crop',
    collection: 'Neon Genesis',
    description: 'Vibrant neon landscapes of a future metropolis.'
  }
];

const NFTPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">NFT Gallery</h1>
          <p className="text-muted-foreground">Create and manage your NFT collection</p>
        </div>
        
        <Tabs defaultValue="collection" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="collection">My Collection</TabsTrigger>
            <TabsTrigger value="create">Create NFT</TabsTrigger>
          </TabsList>
          
          <TabsContent value="collection" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockNfts.map((nft) => (
                <NFTCard 
                  key={nft.id}
                  id={nft.id}
                  name={nft.name}
                  image={nft.image}
                  collection={nft.collection}
                  description={nft.description}
                />
              ))}
            </div>
            
            {mockNfts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">You don't have any NFTs yet</p>
                <Button className="solana-button-primary">Create Your First NFT</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="create" className="animate-fade-in">
            <Card className="solana-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Create New NFT</CardTitle>
                <CardDescription>Fill in the details to mint your NFT on Solana</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter NFT name" className="bg-solana-dark border-solana-primary/20 focus:border-solana-primary" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="symbol">Symbol</Label>
                  <Input id="symbol" placeholder="NFT symbol (e.g. COSMIC)" className="bg-solana-dark border-solana-primary/20 focus:border-solana-primary" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe your NFT" className="bg-solana-dark border-solana-primary/20 focus:border-solana-primary resize-none" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input id="image" placeholder="https://example.com/image.jpg" className="bg-solana-dark border-solana-primary/20 focus:border-solana-primary" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="supply">Supply</Label>
                  <Input 
                    id="supply" 
                    type="number" 
                    min="1"
                    defaultValue="1"
                    className="bg-solana-dark border-solana-primary/20 focus:border-solana-primary" 
                  />
                  <p className="text-xs text-muted-foreground">Number of copies to mint</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="solana-button-primary w-full">Create NFT</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default NFTPage;
