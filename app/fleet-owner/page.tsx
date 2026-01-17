"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Package, Users, TrendingUp, MapPin } from "lucide-react";

export default function FleetOwnerDashboard() {
  // Mock data
  const stats = {
    activeTrips: 5,
    availableTrucks: 12,
    totalDrivers: 15,
    monthlyEarnings: 450000,
  };

  const recentTrips = [
    {
      id: "1",
      source: "Jaipur",
      destination: "Mumbai",
      status: "in_transit",
      driverName: "Rajesh Kumar",
      truckType: "32ft",
    },
    {
      id: "2",
      source: "Delhi",
      destination: "Ahmedabad",
      status: "delivered",
      driverName: "Suresh Patel",
      truckType: "20ft",
    },
  ];

  return (
    <Layout role="fleet_owner" userName="XYZ Transport">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Trips</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.activeTrips}</p>
                </div>
                <Package className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Trucks</p>
                  <p className="text-2xl font-bold text-green-600">{stats.availableTrucks}</p>
                </div>
                <MapPin className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Drivers</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.totalDrivers}</p>
                </div>
                <Users className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">₹{stats.monthlyEarnings.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Link href="/fleet-owner/loads">
                <Button>Discover Loads</Button>
              </Link>
              <Link href="/fleet-owner/trips">
                <Button variant="outline">View Trips</Button>
              </Link>
              <Link href="/fleet-owner/drivers">
                <Button variant="outline">Manage Drivers</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Trips */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {trip.source} → {trip.destination}
                    </p>
                    <p className="text-sm text-gray-500">
                      Driver: {trip.driverName} • {trip.truckType}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        trip.status === "in_transit"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {trip.status === "in_transit" ? "In Transit" : "Delivered"}
                    </span>
                    <Link href={`/fleet-owner/trips/${trip.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

