import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">TaskFlow App</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Setup Complete! 🎉</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Your TaskFlow app is ready to build.</p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
