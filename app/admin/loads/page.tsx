"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatDate, formatCurrency } from "@/lib/utils";
import { Search, Filter } from "lucide-react";

export default function AdminLoadsPage() {
  // Mock data
  const loads = [
    {
      id: "1",
      source: "Jaipur",
      destination: "Mumbai",
      truckType: "32ft",
      weight: 15000,
      pickupDate: "2024-06-15",
      status: "in_progress",
      shipperName: "ABC Industries",
      expectedPrice: 45000,
    },
    {
      id: "2",
      source: "Delhi",
      destination: "Ahmedabad",
      truckType: "20ft",
      weight: 8000,
      pickupDate: "2024-06-10",
      status: "completed",
      shipperName: "XYZ Corp",
      expectedPrice: 28000,
    },
    {
      id: "3",
      source: "Gurgaon",
      destination: "Jaipur",
      truckType: "32ft",
      weight: 12000,
      pickupDate: "2024-06-20",
      status: "open",
      shipperName: "DEF Logistics",
      expectedPrice: 35000,
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

  return (
    <Layout role="admin" userName="Admin">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Load Management</h2>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search loads..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loads List */}
        <Card>
          <CardHeader>
            <CardTitle>All Loads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {loads.map((load) => (
                <div
                  key={load.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {load.source} → {load.destination}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          load.status
                        )}`}
                      >
                        {load.status === "in_progress" ? "In Progress" : load.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Shipper:</span> {load.shipperName}
                      </div>
                      <div>
                        <span className="font-medium">Truck Type:</span> {load.truckType}
                      </div>
                      <div>
                        <span className="font-medium">Pickup:</span> {formatDate(load.pickupDate)}
                      </div>
                      <div>
                        <span className="font-medium">Price:</span> {formatCurrency(load.expectedPrice || 0)}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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

