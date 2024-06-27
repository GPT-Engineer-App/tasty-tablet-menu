import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faDrumstickBite, faIceCream, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
      <h1 className="text-4xl font-bold">Welcome to Our Restaurant</h1>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-secondary text-secondary-foreground">
          <CardHeader>
            <CardTitle>
              <FontAwesomeIcon icon={faUtensils} className="mr-2" />
              Appetizers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Delicious starters to begin your meal.</p>
            <Button variant="outline" className="mt-4">View Menu</Button>
          </CardContent>
        </Card>
        <Card className="bg-secondary text-secondary-foreground">
          <CardHeader>
            <CardTitle>
              <FontAwesomeIcon icon={faDrumstickBite} className="mr-2" />
              Main Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Hearty and satisfying main dishes.</p>
            <Button variant="outline" className="mt-4">View Menu</Button>
          </CardContent>
        </Card>
        <Card className="bg-secondary text-secondary-foreground">
          <CardHeader>
            <CardTitle>
              <FontAwesomeIcon icon={faIceCream} className="mr-2" />
              Desserts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sweet treats to end your meal.</p>
            <Button variant="outline" className="mt-4">View Menu</Button>
          </CardContent>
        </Card>
        <Card className="bg-secondary text-secondary-foreground">
          <CardHeader>
            <CardTitle>
              <FontAwesomeIcon icon={faCoffee} className="mr-2" />
              Beverages
            </CardTitle>
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