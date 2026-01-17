"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Clock, CheckCircle } from "lucide-react";

export default function PaymentsPage() {
  // Mock data
  const payments = [
    {
      id: "1",
      loadId: "1",
      source: "Jaipur",
      destination: "Mumbai",
      amount: 45000,
      status: "pending",
      dueDate: "2024-06-20",
      tripId: "trip-1",
    },
    {
      id: "2",
      loadId: "2",
      source: "Delhi",
      destination: "Ahmedabad",
      amount: 28000,
      status: "paid",
      paidDate: "2024-06-12",
      referenceId: "PAY-123456",
      tripId: "trip-2",
    },
  ];

  return (
    <Layout role="shipper" userName="ABC Industries">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Payment Status</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                  <p className="text-2xl font-bold text-orange-600">₹75,000</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Paid This Month</p>
                  <p className="text-2xl font-bold text-green-600">₹1,25,000</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                  <p className="text-2xl font-bold text-gray-900">{payments.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="font-medium text-gray-900">
                        {payment.source} → {payment.destination}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          payment.status === "pending"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {payment.status === "pending" ? "Pending" : "Paid"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Amount: {formatCurrency(payment.amount)}</p>
                      {payment.status === "pending" ? (
                        payment.dueDate && <p>Due Date: {formatDate(payment.dueDate)}</p>
                      ) : (
                        <>
                          {payment.paidDate && <p>Paid Date: {formatDate(payment.paidDate)}</p>}
                          {payment.referenceId && <p>Reference ID: {payment.referenceId}</p>}
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    {payment.status === "pending" && (
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                        Make Payment
                      </button>
                    )}
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

