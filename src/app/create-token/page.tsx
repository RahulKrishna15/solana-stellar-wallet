return (
  <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-6 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Create New Token
            </CardTitle>
            <CardDescription>
              Create your own Solana SPL token with custom parameters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Token Name</Label>
                  <Input
                    id="name"
                    placeholder="My Token"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="symbol">Token Symbol</Label>
                  <Input
                    id="symbol"
                    placeholder="MTK"
                    value={formData.symbol}
                    onChange={(e) =>
                      setFormData({ ...formData, symbol: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="decimals">Decimals</Label>
                <Input
                  id="decimals"
                  type="number"
                  min="0"
                  max="9"
                  value={formData.decimals}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      decimals: parseInt(e.target.value),
                    })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supply">Initial Supply</Label>
                <Input
                  id="supply"
                  type="number"
                  min="1"
                  value={formData.supply}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      supply: parseInt(e.target.value),
                    })
                  }
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Create Token
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
