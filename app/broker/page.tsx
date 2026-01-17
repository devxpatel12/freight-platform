"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Package, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default function BrokerDashboard() {
  const stats = {
    totalLoads: 18,
    activeLoads: 5,
    completedLoads: 12,
    totalCommissions: 125000,
  };

  return (
    <Layout role="broker" userName="DEF Logistics">
      <div className="space-y-6">
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
                  <p className="text-sm font-medium text-gray-600">Total Commissions</p>
                  <p className="text-2xl font-bold text-purple-600">₹{stats.totalCommissions.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Link href="/broker/loads/new">
                <Button>Post New Load</Button>
              </Link>
              <Link href="/broker/loads">
                <Button variant="outline">View All Loads</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

