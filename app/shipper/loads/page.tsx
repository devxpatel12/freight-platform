"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Search, Filter, MapPin } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import VehicleMap from "@/components/VehicleMap";

export default function MyLoadsPage() {
  // Mock data with location coordinates
  const loads = [
    {
      id: "1",
      source: "Jaipur",
      destination: "Mumbai",
      truckType: "32ft",
      weight: 15000,
      pickupDate: "2024-06-15",
      status: "in_progress",
      expectedPrice: 45000,
      // Mock GPS coordinates (Jaipur to Mumbai route - somewhere near Udaipur)
      latitude: 24.5854,
      longitude: 73.7125,
      driverName: "Rajesh Kumar",
      currentLocation: "Near Udaipur, Rajasthan",
      // Source and destination coordinates
      sourceLat: 26.9124,
      sourceLng: 75.7873,
      destLat: 19.0760,
      destLng: 72.8777,
    },
    {
      id: "2",
      source: "Delhi",
      destination: "Ahmedabad",
      truckType: "20ft",
      weight: 8000,
      pickupDate: "2024-06-10",
      status: "completed",
      expectedPrice: 28000,
      // Mock GPS coordinates (Delhi to Ahmedabad route - near Ahmedabad)
      latitude: 23.0225,
      longitude: 72.5714,
      driverName: "Suresh Patel",
      currentLocation: "Ahmedabad, Gujarat",
    },
    {
      id: "3",
      source: "Gurgaon",
      destination: "Jaipur",
      truckType: "32ft",
      weight: 12000,
      pickupDate: "2024-06-20",
      status: "open",
      expectedPrice: 35000,
      // No location yet as it's open
      latitude: null,
      longitude: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-gray-100 text-gray-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "open":
        return "Open";
      case "in_progress":
        return "In Progress";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  return (
    <Layout role="shipper" userName="ABC Industries">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">My Loads</h2>
          <Link href="/shipper/loads/new">
            <Button>Post New Load</Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search loads..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loads List */}
        <div className="space-y-4">
          {loads.map((load) => (
            <Accordion
              key={load.id}
              title={
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {load.source} → {load.destination}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            load.status
                          )}`}
                        >
                          {getStatusLabel(load.status)}
                        </span>
                        {load.status === "in_progress" && load.latitude && (
                          <span className="flex items-center text-sm text-primary-600">
                            <MapPin className="h-4 w-4 mr-1" />
                            Live Tracking Available
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Truck:</span> {load.truckType}
                    </div>
                    <div>
                      <span className="font-medium">Price:</span> ₹{load.expectedPrice?.toLocaleString()}
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-4">
                {/* Load Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Truck Type:</span>
                    <p className="text-gray-900">{load.truckType}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Weight:</span>
                    <p className="text-gray-900">{load.weight.toLocaleString()} kg</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Pickup Date:</span>
                    <p className="text-gray-900">{formatDate(load.pickupDate)}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Expected Price:</span>
                    <p className="text-gray-900">₹{load.expectedPrice?.toLocaleString()}</p>
                  </div>
                </div>

                {/* Map Section - Only show if load is in progress and has location */}
                {load.status === "in_progress" && load.latitude && load.longitude ? (
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                      Live Vehicle Location
                    </h4>
                    <VehicleMap
                      latitude={load.latitude}
                      longitude={load.longitude}
                      vehicleType={load.truckType}
                      driverName={load.driverName}
                      currentLocation={load.currentLocation}
                      source={load.source}
                      destination={load.destination}
                      sourceLat={load.sourceLat}
                      sourceLng={load.sourceLng}
                      destLat={load.destLat}
                      destLng={load.destLng}
                    />
                  </div>
                ) : load.status === "open" ? (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600">
                        Vehicle location will be available once the load is accepted and trip begins.
                      </p>
                    </div>
                  </div>
                ) : null}

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 pt-4 border-t border-gray-200">
                  <Link href={`/shipper/loads/${load.id}`}>
                    <Button variant="outline" size="sm">
                      View Full Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </Layout>
  );
}

