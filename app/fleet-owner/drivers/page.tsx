"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Users, Plus, Phone, User } from "lucide-react";

export default function DriversPage() {
  // Mock data
  const drivers = [
    {
      id: "1",
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      status: "active",
      currentTrip: "Jaipur → Mumbai",
    },
    {
      id: "2",
      name: "Suresh Patel",
      phone: "+91 98765 43211",
      status: "active",
      currentTrip: null,
    },
    {
      id: "3",
      name: "Amit Sharma",
      phone: "+91 98765 43212",
      status: "inactive",
      currentTrip: null,
    },
  ];

  return (
    <Layout role="fleet_owner" userName="XYZ Transport">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Drivers</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Driver
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Drivers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {drivers.map((driver) => (
                <div
                  key={driver.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{driver.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {driver.phone}
                        </span>
                        {driver.currentTrip && (
                          <span className="text-blue-600">On Trip: {driver.currentTrip}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        driver.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {driver.status === "active" ? "Active" : "Inactive"}
                    </span>
                    <Button variant="outline" size="sm">
                      Manage
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

