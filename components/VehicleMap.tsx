"use client";

import { useState } from "react";
import { MapPin, Navigation, AlertCircle, Radio } from "lucide-react";

interface VehicleMapProps {
  latitude: number;
  longitude: number;
  vehicleType?: string;
  driverName?: string;
  currentLocation?: string;
  source?: string;
  destination?: string;
  sourceLat?: number;
  sourceLng?: number;
  destLat?: number;
  destLng?: number;
}

export default function VehicleMap({
  latitude,
  longitude,
  vehicleType,
  driverName,
  currentLocation,
  source,
  destination,
  sourceLat,
  sourceLng,
  destLat,
  destLng,
}: VehicleMapProps) {
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  // Direct Google Maps link (works without API key)
  const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
  // Build markers for static map
  const markers: string[] = [];
  
  // Current vehicle location (red marker with vehicle icon) - most prominent
  markers.push(`color:red|label:V|${latitude},${longitude}`);
  
  // Source location (green marker)
  if (sourceLat && sourceLng) {
    markers.push(`color:green|label:S|${sourceLat},${sourceLng}`);
  }
  
  // Destination location (blue marker)
  if (destLat && destLng) {
    markers.push(`color:blue|label:D|${destLat},${destLng}`);
  }
  
  const markersString = markers.join('&markers=');
  
  // Static map URL with route visualization
  // Shows: Source (green) -> Vehicle Current Location (red) -> Destination (blue)
  let staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=10&size=800x400&markers=${markersString}`;
  
  // Add path from source to current location (green line)
  if (sourceLat && sourceLng) {
    staticMapUrl += `&path=color:0x00FF00|weight:4|${sourceLat},${sourceLng}|${latitude},${longitude}`;
  }
  
  // Add path from current location to destination (red dashed line)
  if (destLat && destLng) {
    staticMapUrl += `&path=color:0xFF0000|weight:4|${latitude},${longitude}|${destLat},${destLng}`;
  }
  
  staticMapUrl += `&key=${GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}`;

  return (
    <div className="space-y-4">
      {/* Vehicle Location Tracker - Prominent Display */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-lg shadow-lg">
        <div className="flex items-start space-x-4">
          <div className="bg-white bg-opacity-20 rounded-full p-3">
            <Radio className="h-6 w-6 animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-bold">Live Vehicle Location</h3>
              <span className="px-2 py-1 bg-green-400 text-white text-xs font-semibold rounded-full animate-pulse">
                TRACKING
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-primary-100 text-xs mb-1">GPS Coordinates</p>
                <p className="text-white font-mono font-semibold text-base">
                  {latitude.toFixed(6)}, {longitude.toFixed(6)}
                </p>
              </div>
              {currentLocation && (
                <div>
                  <p className="text-primary-100 text-xs mb-1">Current Location</p>
                  <p className="text-white font-semibold">{currentLocation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {vehicleType && (
            <div>
              <span className="font-medium text-gray-600">Vehicle Type:</span>
              <p className="text-gray-900 font-semibold">{vehicleType}</p>
            </div>
          )}
          {driverName && (
            <div>
              <span className="font-medium text-gray-600">Driver:</span>
              <p className="text-gray-900 font-semibold">{driverName}</p>
            </div>
          )}
          <div>
            <span className="font-medium text-gray-600">Status:</span>
            <p className="text-gray-900 font-semibold">In Transit</p>
          </div>
        </div>
        {(source || destination) && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {source && (
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Source:</span>
                  <span className="ml-2 font-semibold text-gray-900">{source}</span>
                </div>
              )}
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-gray-600">Current:</span>
                <span className="ml-2 font-semibold text-primary-600">Vehicle Location</span>
              </div>
              {destination && (
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Destination:</span>
                  <span className="ml-2 font-semibold text-gray-900">{destination}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Map Container with Vehicle Location Marker */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-primary-300 shadow-lg bg-gray-100">
        {GOOGLE_MAPS_API_KEY ? (
          <>
            {/* Interactive Google Maps Embed - Shows exact vehicle location */}
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${latitude},${longitude}&zoom=14`}
              className="w-full h-full"
            />
            
            {/* Vehicle Location Indicator Overlay */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 border-2 border-primary-500 z-10">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-xs text-gray-600">Vehicle Location</p>
                  <p className="text-xs font-mono font-semibold text-gray-900">
                    {latitude.toFixed(4)}, {longitude.toFixed(4)}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 rounded-lg shadow-lg p-3 border border-gray-200 z-10">
              <div className="space-y-1 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Source: {source || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-semibold">Vehicle (Current Location)</span>
                </div>
                {destLat && destLng && (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Destination: {destination || 'N/A'}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="relative mb-4">
                <Navigation className="h-12 w-12 text-primary-600 mx-auto" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-primary-300 rounded-full animate-ping"></div>
              </div>
              <p className="text-gray-900 font-semibold mb-2">Live Vehicle Location</p>
              <p className="text-sm text-gray-600 mb-1 font-mono">
                {latitude.toFixed(6)}, {longitude.toFixed(6)}
              </p>
              {currentLocation && (
                <p className="text-sm text-gray-500 mb-4">{currentLocation}</p>
              )}
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                View Exact Location in Google Maps
              </a>
              <p className="text-xs text-gray-400 mt-4">
                Add API key to enable embedded map view
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Location Details */}
      <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
        <div className="flex items-start space-x-3">
          <Navigation className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-primary-900">Real-time Tracking</p>
            <p className="text-xs text-primary-700 mt-1">
              Location is updated every few minutes. Click &quot;Open in Google Maps&quot; for detailed navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

