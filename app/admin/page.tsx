"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, Package, Truck, DollarSign, AlertCircle, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  // Mock data
  const stats = {
    pendingApprovals: 5,
    activeLoads: 23,
    activeTrips: 18,
    pendingPayments: 12,
    totalUsers: 156,
  };

  const pendingApprovals = [
    {
      id: "1",
      name: "ABC Transport",
      role: "Fleet Owner",
      phone: "+91 98765 43210",
      submittedAt: "2024-06-14",
    },
    {
      id: "2",
      name: "XYZ Logistics",
      role: "Broker",
      phone: "+91 98765 43211",
      submittedAt: "2024-06-13",
    },
  ];

  return (
    <Layout role="admin" userName="Admin">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.pendingApprovals}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Loads</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.activeLoads}</p>
                </div>
                <Package className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Trips</p>
                  <p className="text-2xl font-bold text-green-600">{stats.activeTrips}</p>
                </div>
                <Truck className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.pendingPayments}</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-gray-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Approvals */}
        <Card>
          <CardHeader>
            <CardTitle>Pending User Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">
                      {user.role} • {user.phone}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Submitted: {new Date(user.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      <CheckCircle className="h-4 w-4 inline mr-2" />
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      Reject
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      View Details
                    </button>
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

