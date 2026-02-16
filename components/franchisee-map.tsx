"use client"

import React, { useEffect, useState, useMemo } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Search, MapPin, Navigation, Phone, Info, Crosshair, Plus, Minus, RefreshCcw } from 'lucide-react'
import rajasthanData from './data/rajasthan.json'

// --- Extended Franchisee Data (Filtered for Rajasthan) ---
const franchiseeData = [
  { id: 3, name: "Pushaan Tea Jaipur Flagship", city: "Jaipur", state: "Rajasthan", lat: 26.9124, lng: 75.7873, address: "MI Road, Pink City, Jaipur 302001", phone: "+91 98765 43212", outlets: 25 },
  { id: 8, name: "Pushaan Tea Udaipur Lakeview", city: "Udaipur", state: "Rajasthan", lat: 24.5854, lng: 73.7125, address: "Hanuman Ghat, Lake Side, Udaipur 313001", phone: "+91 98765 43217", outlets: 22 },
  { id: 11, name: "Pushaan Tea Jodhpur Sun City", city: "Jodhpur", state: "Rajasthan", lat: 26.2389, lng: 73.0243, address: "Near Clock Tower, Jodhpur 342001", phone: "+91 98765 43220", outlets: 15 },
  { id: 12, name: "Pushaan Tea Kota Riverfront", city: "Kota", state: "Rajasthan", lat: 25.2138, lng: 75.8648, address: "Chambal Garden Road, Kota 324001", phone: "+91 98765 43221", outlets: 12 },
  { id: 13, name: "Pushaan Tea Ajmer Sharif", city: "Ajmer", state: "Rajasthan", lat: 26.4499, lng: 74.6399, address: "Dargah Bazar, Ajmer 305001", phone: "+91 98765 43222", outlets: 10 },
  { id: 14, name: "Pushaan Tea Bikaner Heritage", city: "Bikaner", state: "Rajasthan", lat: 28.0229, lng: 73.3119, address: "Junagarh Fort Road, Bikaner 334001", phone: "+91 98765 43223", outlets: 9 },
  { id: 15, name: "Pushaan Tea Alwar Fort", city: "Alwar", state: "Rajasthan", lat: 27.5530, lng: 76.6346, address: "Company Bagh, Alwar 301001", phone: "+91 98765 43224", outlets: 8 },
]

const RAJASTHAN_CENTER: [number, number] = [26.5, 73.8]

// Internal component to handle map actions and UI overlays
function MapUI({
  searchQuery,
  setSearchQuery,
  filteredLocations,
  handleSelectLocation,
  handleLocateMe
}: any) {
  const map = useMap()

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation()
    map.zoomIn()
  }

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation()
    map.zoomOut()
  }

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation()
    map.flyTo(RAJASTHAN_CENTER, 7, { duration: 1.5 })
  }

  return (
    <>
      <div className="absolute top-6 left-6 z-[1000] space-y-3 pointer-events-none md:pointer-events-auto select-none">
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-green-100 rounded-lg text-green-700">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Rajasthan Network</p>
              <p className="text-xl font-black text-[#00492C]">100+ <span className="text-xs font-normal text-gray-500">Outlets</span></p>
            </div>
          </div>
        </div>

        <div className="bg-[#00492C]/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-green-700/30 transform transition-all duration-300 hover:scale-105">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-100/10 rounded-lg text-amber-400">
              <Info size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-green-200/50 uppercase tracking-tighter">Impact Districts</p>
              <p className="text-xl font-black text-white">25+ <span className="text-xs font-normal text-green-200/60">Across State</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-6 right-6 z-[1000] flex flex-col items-end gap-3 select-none">
        <div className="relative w-64 md:w-80">
          <input
            type="text"
            placeholder="Search city or shop..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onMouseDown={(e) => e.stopPropagation()}
            className="w-full bg-white/95 backdrop-blur-md pl-12 pr-4 py-3.5 rounded-2xl shadow-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#00492C] transition-all text-sm font-medium"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

          {searchQuery && (
            <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-64 overflow-y-auto">
              {filteredLocations.map((loc: any) => (
                <button
                  key={loc.id}
                  onClick={() => {
                    handleSelectLocation(loc)
                    map.flyTo([loc.lat, loc.lng], 10, { duration: 1.5 })
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-green-50 transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group/item"
                >
                  <div>
                    <p className="font-bold text-[#00492C] text-sm">{loc.name}</p>
                    <p className="text-xs text-gray-500">{loc.city}, {loc.state}</p>
                  </div>
                  <Navigation className="text-gray-300 group-hover/item:text-[#00492C] transition-colors" size={14} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 items-end">
          <button
            onClick={() => handleLocateMe(map)}
            className="bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 text-gray-600 hover:text-[#00492C] hover:bg-green-50 transition-all active:scale-95 flex items-center gap-2 touch-manipulation"
          >
            <Crosshair size={20} />
            <span className="text-xs font-bold md:block hidden pr-2 uppercase">Find my nearest store</span>
          </button>

          <div className="flex flex-col gap-1.5 p-1.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <button
              onClick={handleZoomIn}
              className="p-3 rounded-xl hover:bg-green-50 text-gray-600 hover:text-[#00492C] transition-all active:scale-90 touch-manipulation flex items-center justify-center"
              title="Zoom In"
            >
              <Plus size={22} />
            </button>
            <div className="h-px bg-gray-100 mx-2"></div>
            <button
              onClick={handleZoomOut}
              className="p-3 rounded-xl hover:bg-green-50 text-gray-600 hover:text-[#00492C] transition-all active:scale-90 touch-manipulation flex items-center justify-center"
              title="Zoom Out"
            >
              <Minus size={22} />
            </button>
            <div className="h-px bg-gray-100 mx-2"></div>
            <button
              onClick={handleReset}
              className="p-3 rounded-xl hover:bg-green-50 text-gray-600 hover:text-[#00492C] transition-all active:scale-90 touch-manipulation flex items-center justify-center"
              title="Reset View"
            >
              <RefreshCcw size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default function FranchiseeMap() {
  const [mounted, setMounted] = useState(false)
  const [icon, setIcon] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setMounted(true)
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    })

    setIcon(L.divIcon({
      className: "custom-marker-wrapper",
      html: `<div class="pulse-marker"><div class="pulse-center"></div><div class="pulse-ring"></div></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    }))
  }, [])

  const filteredLocations = useMemo(() => {
    return franchiseeData.filter(loc =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.state.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const handleLocateMe = (mapInstance: L.Map) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        mapInstance.flyTo([latitude, longitude], 12, { duration: 1.5 })
      })
    }
  }

  const handleSelectLocation = (loc: any) => {
    setSearchQuery("")
  }

  const geoJsonStyle = {
    fillColor: "#00492C",
    weight: 2,
    opacity: 1,
    color: '#00492C',
    dashArray: '3',
    fillOpacity: 0.05
  };

  if (!mounted || !icon) {
    return (
      <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200">
        <div className="w-8 h-8 border-4 border-green-800 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 font-medium tracking-wide">INITIALIZING RAJASTHAN NETWORK...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">

      <MapContainer
        center={RAJASTHAN_CENTER}
        zoom={6}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        style={{ height: "100%", width: "100%", background: "#f0f2f5" }}
        zoomControl={false}
      >
        <MapUI
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredLocations={filteredLocations}
          handleSelectLocation={handleSelectLocation}
          handleLocateMe={handleLocateMe}
        />

        <TileLayer
          attribution='&copy; <a href="https://carto.com/" target="_blank">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* @ts-ignore */}
        <GeoJSON data={rajasthanData} style={geoJsonStyle} />

        {franchiseeData.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={icon}
            // @ts-ignore
            eventHandlers={{
              click: () => handleSelectLocation(location)
            }}
          >
            <Popup className="premium-popup">
              <div className="w-[280px] overflow-hidden rounded-lg">
                <div className="relative h-24 bg-gradient-to-br from-[#00492C] to-[#007042] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
                  <h3 className="text-white text-lg font-black tracking-tighter text-center px-4 leading-tight">{location.name}</h3>
                </div>

                <div className="p-4 bg-white">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-[#00492C] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600 leading-relaxed font-medium">{location.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-[#00492C] shrink-0" />
                      <p className="text-xs text-gray-900 font-bold tracking-wider">{location.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#00492C] hover:bg-[#007042] text-white py-2.5 rounded-xl text-[11px] font-black flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
                    >
                      <Navigation size={14} fill="currentColor" />
                      GET DIRECTIONS
                    </a>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Live Operations</span>
                    </div>
                    <span className="text-[10px] font-black text-[#00492C] opacity-30">{location.outlets}+ Sub-Units</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <style jsx global>{`
        .custom-marker-wrapper {
          background: transparent;
          border: none;
        }
        .pulse-marker {
          width: 24px;
          height: 24px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pulse-center {
          width: 14px;
          height: 14px;
          background-color: #00492C;
          border: 2.5px solid white;
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(0,73,44,0.4);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-marker-wrapper:hover .pulse-center {
          transform: scale(1.3) translateY(-4px);
          background-color: #007042;
        }
        .pulse-ring {
          position: absolute;
          width: 350%;
          height: 350%;
          background-color: #00492C;
          border-radius: 50%;
          opacity: 0;
          animation: mapPulse 2s infinite ease-out;
          z-index: 1;
        }
        @keyframes mapPulse {
          0% { transform: scale(0.2); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0; }
        }
        /* Hide Leaflet default controls for premium feel */
        .leaflet-control-zoom {
          display: none !important;
        }
        .leaflet-control-attribution {
          font-size: 8px !important;
          opacity: 0.3 !important;
          background: transparent !important;
        }
        .premium-popup .leaflet-popup-content-wrapper {
          border-radius: 20px !important;
          padding: 0 !important;
          overflow: hidden !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }
        .premium-popup .leaflet-popup-content {
          margin: 0 !important;
          width: 280px !important;
        }
        .premium-popup .leaflet-popup-tip {
          box-shadow: none !important;
        }
        .leaflet-container {
          filter: saturate(0.9) contrast(1.05) brightness(1.02);
          cursor: crosshair !important;
          touch-action: pan-x pan-y !important; 
        }
        .touch-manipulation {
          touch-action: manipulation !important; 
        }
      `}</style>
    </div>
  )
}
