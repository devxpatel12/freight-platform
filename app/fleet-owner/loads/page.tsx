"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { formatDate, formatCurrency } from "@/lib/utils";
import { Search, Filter, CheckCircle, XCircle, MapPin } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import VehicleMap from "@/components/VehicleMap";

export default function DiscoverLoadsPage() {
  const [filters, setFilters] = useState({
    source: "",
    destination: "",
    truckType: "",
    pickupDate: "",
  });

  // Mock data
  const loads = [
    {
      id: "1",
      source: "Jaipur",
      destination: "Mumbai",
      truckType: "32ft",
      weight: 15000,
      pickupDate: "2024-06-15",
      expectedPrice: 45000,
      shipperName: "ABC Industries",
      // Route coordinates (source)
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
      pickupDate: "2024-06-18",
      expectedPrice: 28000,
      shipperName: "XYZ Corp",
      sourceLat: 28.6139,
      sourceLng: 77.2090,
      destLat: 23.0225,
      destLng: 72.5714,
    },
    {
      id: "3",
      source: "Gurgaon",
      destination: "Jaipur",
      truckType: "32ft",
      weight: 12000,
      pickupDate: "2024-06-20",
      expectedPrice: 35000,
      shipperName: "DEF Logistics",
      sourceLat: 28.4089,
      sourceLng: 77.0378,
      destLat: 26.9124,
      destLng: 75.7873,
    },
  ];

  const handleAccept = (loadId: string) => {
    if (confirm("Are you sure you want to accept this load?")) {
      alert("Load accepted! Please assign a driver.");
      // Navigate to trip assignment
    }
  };

  return (
    <Layout role="fleet_owner" userName="XYZ Transport">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Discover Loads</h2>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                label="Source"
                placeholder="City / District"
                value={filters.source}
                onChange={(e) => setFilters({ ...filters, source: e.target.value })}
              />
              <Input
                label="Destination"
                placeholder="City / District"
                value={filters.destination}
                onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
              />
              <Select
                label="Truck Type"
                value={filters.truckType}
                onChange={(e) => setFilters({ ...filters, truckType: e.target.value })}
                options={[
                  { value: "", label: "All Types" },
                  { value: "20ft", label: "20ft" },
                  { value: "32ft", label: "32ft" },
                  { value: "trailer", label: "Trailer" },
                ]}
              />
              <Input
                label="Pickup Date"
                type="date"
                value={filters.pickupDate}
                onChange={(e) => setFilters({ ...filters, pickupDate: e.target.value })}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
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
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          Open
                        </span>
                        <span className="text-sm text-gray-500">Shipper: {load.shipperName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Price:</span> {formatCurrency(load.expectedPrice || 0)}
                    </div>
                    <div className="flex items-center text-primary-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-xs">View Route</span>
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
                    <p className="text-gray-900">{formatCurrency(load.expectedPrice || 0)}</p>
                  </div>
                </div>

                {/* Route Map */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                    Route Map
                  </h4>
                  <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg bg-gray-100">
                    {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
                      <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&origin=${load.sourceLat},${load.sourceLng}&destination=${load.destLat},${load.destLng}&zoom=8`}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                          <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                          <p className="text-gray-900 font-semibold mb-2">Route Map</p>
                          <p className="text-sm text-gray-600 mb-4">
                            {load.source} → {load.destination}
                          </p>
                          <a
                            href={`https://www.google.com/maps/dir/${load.sourceLat},${load.sourceLng}/${load.destLat},${load.destLng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                          >
                            View Route in Google Maps
                          </a>
                          <p className="text-xs text-gray-400 mt-4">
                            Add API key to enable embedded map view
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 bg-primary-50 p-4 rounded-lg border border-primary-200">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-primary-900">Route Information</p>
                        <p className="text-xs text-primary-700 mt-1">
                          Source: {load.source} → Destination: {load.destination}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAccept(load.id)}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Accept Load
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
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

