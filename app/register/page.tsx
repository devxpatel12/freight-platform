"use client";

import { useState } from "react";
import Link from "next/link";
import { Package, Truck, User, Building2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "shipper",
      title: "Shipper",
      description: "Post loads, track shipments, manage payments",
      icon: <Package className="h-12 w-12" />,
      color: "bg-blue-500",
      requirements: ["Company name", "Contact person details", "GSTIN (optional)"],
    },
    {
      id: "broker",
      title: "Logistics Broker",
      description: "Post loads on behalf of shippers, earn commissions",
      icon: <Building2 className="h-12 w-12" />,
      color: "bg-purple-500",
      requirements: ["Company name", "Contact person details", "GSTIN (optional)", "Admin approval required"],
    },
    {
      id: "fleet-owner",
      title: "Fleet Owner",
      description: "Discover loads, manage drivers, track trips",
      icon: <Truck className="h-12 w-12" />,
      color: "bg-green-500",
      requirements: ["Name", "Phone number", "Company name (optional)", "PAN (optional)", "Admin approval required"],
    },
    {
      id: "driver",
      title: "Driver",
      description: "Execute trips, share location, upload POD",
      icon: <User className="h-12 w-12" />,
      color: "bg-orange-500",
      requirements: ["Mobile number", "Linked to Fleet Owner"],
    },
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
  };

  const handleContinue = () => {
    if (selectedRole) {
      window.location.href = `/register/${selectedRole}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl md:text-3xl font-bold text-primary-600">
              Asian India Trans Logistics
            </Link>
            <Link href="/" className="text-gray-600 hover:text-primary-600">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Create Your Account
          </h1>
          <p className="text-xl text-gray-600">
            Select your role to get started
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all border-2 ${
                selectedRole === role.id
                  ? "border-primary-600 shadow-xl scale-105"
                  : "border-gray-200 hover:border-primary-300 hover:shadow-xl"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`${role.color} text-white p-4 rounded-lg`}>
                  {role.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-700">Requirements:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {role.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {selectedRole === role.id && (
                  <div className="text-primary-600">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button
            onClick={handleContinue}
            disabled={!selectedRole}
            className="min-w-[200px] flex items-center justify-center"
          >
            Continue Registration <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="#" className="text-primary-600 hover:text-primary-700 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

