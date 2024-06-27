import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Welcome to Our Restaurant</h1>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Appetizers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Delicious starters to begin your meal.</p>
            <Button variant="outline" className="mt-4">View Menu</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Main Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Hearty and satisfying main dishes.</p>
            <Button variant="outline" className="mt-4">View Menu</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Desserts</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sweet treats to end your meal.</p>
            <Button variant="outline" className="mt-4">View Menu</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Beverages</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Refreshing drinks to complement your meal.</p>
            <Button variant="outline" className="mt-4">View Menu</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;