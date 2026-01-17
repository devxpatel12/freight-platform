"use client";

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Clock, CheckCircle } from "lucide-react";

export default function AdminPaymentsPage() {
  const payments = [
    {
      id: "1",
      tripId: "trip-1",
      source: "Jaipur",
      destination: "Mumbai",
      amount: 45000,
      status: "pending",
      fleetOwner: "XYZ Transport",
      shipper: "ABC Industries",
      dueDate: "2024-06-20",
    },
    {
      id: "2",
      tripId: "trip-2",
      source: "Delhi",
      destination: "Ahmedabad",
      amount: 28000,
      status: "paid",
      fleetOwner: "ABC Transport",
      shipper: "XYZ Corp",
      paidDate: "2024-06-12",
      referenceId: "PAY-123456",
    },
  ];

  return (
    <Layout role="admin" userName="Admin">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Payment Management</h2>
        <div className="space-y-4">
          {payments.map((payment) => (
            <Card key={payment.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold">{payment.source} → {payment.destination}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        payment.status === "pending" ? "bg-orange-100 text-orange-800" : "bg-green-100 text-green-800"
                      }`}>
                        {payment.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div><span className="font-medium">Amount:</span> {formatCurrency(payment.amount)}</div>
                      <div><span className="font-medium">Fleet Owner:</span> {payment.fleetOwner}</div>
                      <div><span className="font-medium">Shipper:</span> {payment.shipper}</div>
                      {payment.status === "paid" && payment.paidDate && (
                        <div><span className="font-medium">Paid:</span> {formatDate(payment.paidDate)}</div>
                      )}
                    </div>
                  </div>
                  {payment.status === "pending" && (
                    <Button>Update Status</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

