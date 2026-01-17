"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { MapPin, User, Package } from "lucide-react";

export default function AdminTripsPage() {
  const trips = [
    {
      id: "1",
      source: "Jaipur",
      destination: "Mumbai",
      status: "in_transit",
      driverName: "Rajesh Kumar",
      fleetOwner: "XYZ Transport",
      truckType: "32ft",
      paymentStatus: "pending",
    },
    {
      id: "2",
      source: "Delhi",
      destination: "Ahmedabad",
      status: "delivered",
      driverName: "Suresh Patel",
      fleetOwner: "ABC Transport",
      truckType: "20ft",
      paymentStatus: "paid",
    },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      load_accepted: "bg-blue-100 text-blue-800",
      driver_assigned: "bg-purple-100 text-purple-800",
      loaded: "bg-yellow-100 text-yellow-800",
      in_transit: "bg-orange-100 text-orange-800",
      delivered: "bg-green-100 text-green-800",
      closed: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout role="admin" userName="Admin">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Trip Management</h2>
        <div className="space-y-4">
          {trips.map((trip) => (
            <Card key={trip.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold">{trip.source} → {trip.destination}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trip.status)}`}>
                        {trip.status.replace("_", " ")}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center"><User className="h-4 w-4 mr-2" />{trip.driverName}</div>
                      <div className="flex items-center"><Package className="h-4 w-4 mr-2" />{trip.truckType}</div>
                      <div>{trip.fleetOwner}</div>
                      <div className={trip.paymentStatus === "paid" ? "text-green-600" : "text-orange-600"}>
                        {trip.paymentStatus}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

