"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Search, CheckCircle, XCircle, Ban } from "lucide-react";

export default function UsersPage() {
  // Mock data
  const users = [
    {
      id: "1",
      name: "ABC Transport",
      phone: "+91 98765 43210",
      role: "Fleet Owner",
      status: "approved",
      companyName: "ABC Transport Pvt Ltd",
      createdAt: "2024-05-15",
    },
    {
      id: "2",
      name: "XYZ Industries",
      phone: "+91 98765 43211",
      role: "Shipper",
      status: "approved",
      companyName: "XYZ Industries",
      createdAt: "2024-05-20",
    },
    {
      id: "3",
      name: "DEF Logistics",
      phone: "+91 98765 43212",
      role: "Broker",
      status: "pending",
      companyName: "DEF Logistics",
      createdAt: "2024-06-14",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-orange-100 text-orange-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "blocked":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout role="admin" userName="Admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">User Management</h2>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input placeholder="Search by name, phone, or company..." />
              </div>
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users List */}
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Role</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          {user.companyName && (
                            <p className="text-sm text-gray-500">{user.companyName}</p>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{user.role}</td>
                      <td className="py-3 px-4 text-gray-700">{user.phone}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            user.status
                          )}`}
                        >
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          {user.status === "pending" && (
                            <>
                              <button className="p-1 text-green-600 hover:text-green-700">
                                <CheckCircle className="h-5 w-5" />
                              </button>
                              <button className="p-1 text-red-600 hover:text-red-700">
                                <XCircle className="h-5 w-5" />
                              </button>
                            </>
                          )}
                          <button className="p-1 text-gray-600 hover:text-gray-700">
                            <Ban className="h-5 w-5" />
                          </button>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

