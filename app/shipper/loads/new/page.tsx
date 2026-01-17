"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function PostLoadPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    truckType: "",
    weight: "",
    pickupDate: "",
    expectedPrice: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    alert("Load posted successfully!");
    router.push("/shipper/loads");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout role="shipper" userName="ABC Industries">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Post New Load</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Source Location *"
                name="source"
                placeholder="City / District"
                value={formData.source}
                onChange={handleChange}
                required
              />
              <Input
                label="Destination Location *"
                name="destination"
                placeholder="City / District"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Truck Type *"
                name="truckType"
                value={formData.truckType}
                onChange={handleChange}
                required
                options={[
                  { value: "", label: "Select truck type" },
                  { value: "20ft", label: "20ft" },
                  { value: "32ft", label: "32ft" },
                  { value: "trailer", label: "Trailer" },
                  { value: "other", label: "Other" },
                ]}
              />
              <Input
                label="Approximate Load Weight (kg) *"
                name="weight"
                type="number"
                placeholder="e.g., 10000"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Pickup Date *"
                name="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={handleChange}
                required
              />
              <Input
                label="Expected Price (₹)"
                name="expectedPrice"
                type="number"
                placeholder="Optional"
                value={formData.expectedPrice}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes or Special Instructions
              </label>
              <textarea
                name="notes"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Any special requirements or instructions..."
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Posting..." : "Post Load"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
}

