"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Truck, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function FleetOwnerRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    pan: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    numberOfTrucks: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    alert("Registration submitted! Admin approval is required. You will receive an OTP on your mobile number for verification.");
    router.push("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Truck className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Fleet Owner Registration
          </h1>
          <p className="text-gray-600">
            Register as a Fleet Owner to discover loads and manage your fleet
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fleet Owner Information</CardTitle>
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
                <Input
                  label="Company Name (Optional)"
                  name="companyName"
                  placeholder="Your company or fleet name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="PAN (Optional)"
                  name="pan"
                  placeholder="ABCDE1234F"
                  value={formData.pan}
                  onChange={handleChange}
                  maxLength={10}
                />
                <Input
                  label="Number of Trucks"
                  name="numberOfTrucks"
                  type="number"
                  placeholder="e.g., 10"
                  value={formData.numberOfTrucks}
                  onChange={handleChange}
                  min="1"
                  max="100"
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Details</h3>
                <div className="space-y-4">
                  <Input
                    label="Address *"
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      label="City *"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="State *"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Pincode *"
                      name="pincode"
                      placeholder="123456"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      maxLength={6}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Important:</strong> Fleet Owner accounts require admin approval. 
                  After OTP verification, your registration will be pending admin review. 
                  You will be notified once your account is approved.
                </p>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <Link href="/register">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Register as Fleet Owner"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

