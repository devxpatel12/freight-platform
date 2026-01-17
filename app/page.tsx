import Link from "next/link";
import { Truck, Package, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header - Red Background */}
      <div className="bg-primary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4 mb-2 sm:mb-0">
              <a href="mailto:Asianindiatranslogistic@gmail.com" className="hover:text-gray-200">
                Asianindiatranslogistic@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+919799943930" className="hover:text-gray-200">+91 9799943930</a>
              <a href="tel:+919799943720" className="hover:text-gray-200">+91 9799943720</a>
              <a href="tel:+919799939680" className="hover:text-gray-200">+91 9799939680</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-200" aria-label="Facebook">f</a>
              <a href="#" className="hover:text-gray-200" aria-label="Twitter">y</a>
              <a href="#" className="hover:text-gray-200" aria-label="YouTube">▶</a>
              <a href="#" className="hover:text-gray-200" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - White Background */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Asian India Trans Logistics
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-primary-600 font-medium">About Us</Link>
              <Link href="#" className="text-gray-700 hover:text-primary-600 font-medium">Services</Link>
              <Link href="#" className="text-gray-700 hover:text-primary-600 font-medium">Global Coverage</Link>
              <Link href="#" className="text-gray-700 hover:text-primary-600 font-medium">Contacts</Link>
            </div>
            <button className="md:hidden bg-primary-600 text-white p-2 rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-primary-400 text-sm md:text-base mb-2">Asian India Trans Logistics</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              All-India Transport Coverage
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Rajasthan, Delhi, Uttar Pradesh, Madhya Pradesh, Bihar, West Bengal, Assam, Meghalaya, Tripura, Mizoram, Nagaland, Maharashtra, Andhra Pradesh, Karnataka, Tamil Nadu & All Northern States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#portals"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                EXPLORE MORE
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                CONTACT US
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Section */}
      <div id="portals" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Freight Platform
            </h2>
            <p className="text-xl text-gray-600">
              Access your portal based on your role
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PortalCard
              title="Shipper/Broker"
              description="Post loads, track shipments, manage payments"
              href="/shipper"
              icon={<Package className="h-8 w-8" />}
            />
            <PortalCard
              title="Fleet Owner"
              description="Discover loads, manage drivers, track trips"
              href="/fleet-owner"
              icon={<Truck className="h-8 w-8" />}
            />
            <PortalCard
              title="Admin"
              description="Manage users, loads, trips, and payments"
              href="/admin"
              icon={<Settings className="h-8 w-8" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PortalCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow transform hover:scale-105 border-2 border-transparent hover:border-primary-600"
    >
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-primary-600 font-semibold inline-flex items-center">
        Access Portal
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

