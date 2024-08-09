'use client'
import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, MarkerF, InfoWindow, useJsApiLoader } from '@react-google-maps/api'
import { useWindowSize } from '@/lib/hooks'
import { PortableText } from '@/sanity'
import Link from 'next/link'

interface GoogleMapComponentProps {
  positionsList: { locationName: string; position: { latitude: number; longitude: number } }[]
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ positionsList }: any) => {
  const windowWidth = useWindowSize()?.width ?? 0

  const containerStyle = {
    width: '100%',
    height: windowWidth > 720 ? '568px' : '360px',
  }

  const defaultCentre = {
    lat: positionsList[0]?.latitude,
    lng: positionsList[0]?.longitude,
  }

  const positions = positionsList

  const [showInfoWindow, setShowInfoWindow] = useState(false)

  const [isMounted, setIsMounted] = useState(false)

  const [selectedMarker, setSelectedMarker] = useState<number | null>(null)

  const [map, setMap] = useState<any>(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCgyqBZmQ5Au6uieeYTlt5eF2E5tKaaPtY',
    libraries: ['marker'],
  })

  useEffect(() => {
    if (positionsList?.length > 0) {
      setIsMounted(true)
    }
  }, [positionsList])

  const onLoad = (mapInstance: any) => {
    setMap(mapInstance)
  }

  useEffect(() => {
    if (map && positionsList.length > 0) {
      const bounds = new google.maps.LatLngBounds()
      positionsList.forEach((position: any) => {
        bounds.extend(new google.maps.LatLng(position.latitude, position.longitude))
      })
      map.fitBounds(bounds)

      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        map.setZoom(map.getZoom() - 3)
      } else {
        map.setZoom(map.getZoom())
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, positionsList])

  const mapWindow: any = typeof window !== 'undefined' ? window : ''

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCentre}
          onLoad={onLoad}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
          }}
        >
          {positions.map(
            (
              location: {
                latitude: number
                longitude: number
                locationName: string
                address: string
                slug: any
                description: string
              },
              index: number,
            ) => {
              return (
                mapWindow?.google?.maps &&
                isMounted && (
                  <MarkerF
                    key={index}
                    position={{ lat: location?.latitude, lng: location?.longitude }}
                    // icon={{ url: '/location.svg', scaledSize: new google.maps.Size(30, 30) }}
                    title={location?.locationName}
                    onClick={() => setSelectedMarker(index)}
                  >
                    {selectedMarker === index && (
                      <InfoWindow
                        position={{
                          lat: location?.latitude,
                          lng: location?.longitude,
                        }}
                        onCloseClick={() => setSelectedMarker(null)}
                      >
                        <div>
                          <p className="font-montserrat font-semibold text-base">
                            {location?.locationName}
                          </p>
                          <p className="text-sm">{location?.address}</p>
                          {location?.description && (
                            <p className="text-grey-9 text-sm leading-[20px] py-2">
                              <PortableText blocks={location?.description} />
                            </p>
                          )}
                          {location?.slug && (
                            <Link
                              href={`/clinics/${location?.slug?.current}`}
                              className="py-2 underline"
                            >
                              View Clinic
                            </Link>
                          )}
                        </div>
                      </InfoWindow>
                    )}
                  </MarkerF>
                )
              )
            },
          )}
        </GoogleMap>
      )}
    </div>
  )
}

export default GoogleMapComponent
