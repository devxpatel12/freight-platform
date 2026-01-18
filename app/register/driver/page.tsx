"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function DriverRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fleetOwnerId: "",
    licenseNumber: "",
    licenseExpiry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock fleet owners list - in real app, this would come from API
  const fleetOwners = [
    { value: "fo1", label: "XYZ Transport" },
    { value: "fo2", label: "ABC Logistics" },
    { value: "fo3", label: "DEF Transport Services" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    alert("Registration submitted! You will receive an OTP on your mobile number for verification.");
    router.push("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Asian India Trans Logistics
            </Link>
            <Link href="/register" className="text-gray-600 hover:text-primary-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <User className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Driver Registration
          </h1>
          <p className="text-gray-600">
            Register as a Driver to execute trips and track deliveries
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Driver Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Select
                  label="Fleet Owner *"
                  name="fleetOwnerId"
                  value={formData.fleetOwnerId}
                  onChange={handleChange}
                  required
                  options={[
                    { value: "", label: "Select Fleet Owner" },
                    ...fleetOwners,
                  ]}
                />
                <p className="text-xs text-gray-500 mt-1">
                  You must be linked to a Fleet Owner to register as a Driver
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">License Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Driving License Number *"
                    name="licenseNumber"
                    placeholder="DL-01-2020-1234567"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="License Expiry Date *"
                    name="licenseExpiry"
                    type="date"
                    value={formData.licenseExpiry}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-sm text-orange-800">
                  <strong>Note:</strong> Driver registration is typically done through the mobile app. 
                  After OTP verification, you will be able to access the driver portal.
                </p>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <Link href="/register">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Register as Driver"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

