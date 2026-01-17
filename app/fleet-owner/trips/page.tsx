"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { MapPin, User, Package } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import VehicleMap from "@/components/VehicleMap";

export default function TripsPage() {
  // Mock data with GPS coordinates
  const trips = [
    {
      id: "1",
      source: "Jaipur",
      destination: "Mumbai",
      status: "in_transit",
      driverName: "Rajesh Kumar",
      truckType: "32ft",
      pickupDate: "2024-06-15",
      paymentStatus: "pending",
      // Current location on route (somewhere between Jaipur and Mumbai)
      latitude: 24.5854,
      longitude: 73.7125,
      currentLocation: "Near Udaipur, Rajasthan",
      // Source and destination coordinates for route display
      sourceLat: 26.9124,
      sourceLng: 75.7873,
      destLat: 19.0760,
      destLng: 72.8777,
    },
    {
      id: "2",
      source: "Delhi",
      destination: "Ahmedabad",
      status: "delivered",
      driverName: "Suresh Patel",
      truckType: "20ft",
      pickupDate: "2024-06-10",
      paymentStatus: "paid",
      // Final destination
      latitude: 23.0225,
      longitude: 72.5714,
      currentLocation: "Ahmedabad, Gujarat",
    },
    {
      id: "3",
      source: "Gurgaon",
      destination: "Jaipur",
      status: "driver_assigned",
      driverName: "Amit Sharma",
      truckType: "32ft",
      pickupDate: "2024-06-20",
      paymentStatus: "pending",
      // At source location
      latitude: 28.4089,
      longitude: 77.0378,
      currentLocation: "Gurgaon, Haryana",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "load_accepted":
        return "bg-blue-100 text-blue-800";
      case "driver_assigned":
        return "bg-purple-100 text-purple-800";
      case "loaded":
        return "bg-yellow-100 text-yellow-800";
      case "in_transit":
        return "bg-orange-100 text-orange-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      load_accepted: "Load Accepted",
      driver_assigned: "Driver Assigned",
      loaded: "Loaded",
      in_transit: "In Transit",
      delivered: "Delivered",
      closed: "Closed",
    };
    return labels[status] || status;
  };

  return (
    <Layout role="fleet_owner" userName="XYZ Transport">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">My Trips</h2>

        <div className="space-y-4">
          {trips.map((trip) => (
            <Accordion
              key={trip.id}
              title={
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {trip.source} → {trip.destination}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            trip.status
                          )}`}
                        >
                          {getStatusLabel(trip.status)}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            trip.paymentStatus === "paid"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {trip.paymentStatus === "paid" ? "Paid" : "Pending"}
                        </span>
                        {(trip.status === "in_transit" || trip.status === "loaded") && (
                          <span className="flex items-center text-sm text-primary-600">
                            <MapPin className="h-4 w-4 mr-1" />
                            Live Tracking
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{trip.driverName}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-4 w-4 mr-1" />
                      <span>{trip.truckType}</span>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-4">
                {/* Trip Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Driver:</span>
                    <p className="text-gray-900">{trip.driverName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Truck Type:</span>
                    <p className="text-gray-900">{trip.truckType}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Pickup Date:</span>
                    <p className="text-gray-900">{formatDate(trip.pickupDate)}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Payment Status:</span>
                    <p className={`font-semibold ${trip.paymentStatus === "paid" ? "text-green-600" : "text-orange-600"}`}>
                      {trip.paymentStatus === "paid" ? "Paid" : "Pending"}
                    </p>
                  </div>
                </div>

                {/* Map Section - Show for in_transit, loaded, or delivered trips */}
                {(trip.status === "in_transit" || trip.status === "loaded" || trip.status === "delivered") && trip.latitude && trip.longitude && (
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                      Live Vehicle Location
                    </h4>
                    <VehicleMap
                      latitude={trip.latitude}
                      longitude={trip.longitude}
                      vehicleType={trip.truckType}
                      driverName={trip.driverName}
                      currentLocation={trip.currentLocation}
                      source={trip.source}
                      destination={trip.destination}
                      sourceLat={trip.sourceLat}
                      sourceLng={trip.sourceLng}
                      destLat={trip.destLat}
                      destLng={trip.destLng}
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 pt-4 border-t border-gray-200">
                  <Button variant="outline" size="sm">
                    View Full Details
                  </Button>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </Layout>
  );
}

