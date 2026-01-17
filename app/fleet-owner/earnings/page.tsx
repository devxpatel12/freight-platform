"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { formatCurrency, formatDate } from "@/lib/utils";
import { TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react";

export default function EarningsPage() {
  // Mock data
  const earnings = {
    totalEarnings: 1250000,
    thisMonth: 450000,
    pending: 75000,
    paid: 1175000,
  };

  const transactions = [
    {
      id: "1",
      tripId: "trip-1",
      source: "Jaipur",
      destination: "Mumbai",
      amount: 45000,
      status: "pending",
      date: "2024-06-15",
    },
    {
      id: "2",
      tripId: "trip-2",
      source: "Delhi",
      destination: "Ahmedabad",
      amount: 28000,
      status: "paid",
      date: "2024-06-12",
      paidDate: "2024-06-14",
    },
    {
      id: "3",
      tripId: "trip-3",
      source: "Gurgaon",
      destination: "Jaipur",
      amount: 35000,
      status: "paid",
      date: "2024-06-10",
      paidDate: "2024-06-12",
    },
  ];

  return (
    <Layout role="fleet_owner" userName="XYZ Transport">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Earnings</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(earnings.totalEarnings)}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-primary-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(earnings.thisMonth)}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {formatCurrency(earnings.pending)}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Paid</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatCurrency(earnings.paid)}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="font-medium text-gray-900">
                        {transaction.source} → {transaction.destination}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          transaction.status === "pending"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {transaction.status === "pending" ? "Pending" : "Paid"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Trip ID: {transaction.tripId}</p>
                      {transaction.status === "paid" && transaction.paidDate && (
                        <p>Paid on: {formatDate(transaction.paidDate)}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      {formatCurrency(transaction.amount)}
                    </p>
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

