"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Package, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default function ShipperDashboard() {
  // Mock data
  const stats = {
    totalLoads: 12,
    activeLoads: 3,
    completedLoads: 8,
    pendingPayments: 2,
  };

  const recentLoads = [
    {
      id: "1",
      source: "Jaipur",
      destination: "Mumbai",
      status: "in_progress",
      pickupDate: "2024-06-15",
      truckType: "32ft",
    },
    {
      id: "2",
      source: "Delhi",
      destination: "Ahmedabad",
      status: "completed",
      pickupDate: "2024-06-10",
      truckType: "20ft",
    },
  ];

  return (
    <Layout role="shipper" userName="ABC Industries">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Loads</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalLoads}</p>
                </div>
                <Package className="h-8 w-8 text-primary-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Loads</p>
                  <p className="text-2xl font-bold text-green-600">{stats.activeLoads}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.completedLoads}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.pendingPayments}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
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
              <Link href="/shipper/loads/new">
                <Button>Post New Load</Button>
              </Link>
              <Link href="/shipper/loads">
                <Button variant="outline">View All Loads</Button>
              </Link>
              <Link href="/shipper/payments">
                <Button variant="outline">Payment Status</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Loads */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Loads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLoads.map((load) => (
                <div
                  key={load.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {load.source} → {load.destination}
                    </p>
                    <p className="text-sm text-gray-500">
                      {load.truckType} • Pickup: {load.pickupDate}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        load.status === "in_progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {load.status === "in_progress" ? "In Progress" : "Completed"}
                    </span>
                    <Link href={`/shipper/loads/${load.id}`}>
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

