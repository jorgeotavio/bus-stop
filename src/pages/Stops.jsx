import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import BusStopList from '../components/BusStopList';
import { Badge, Card, CardBody, Col } from 'reactstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ShowStopData from '../components/ShowStopData';
import { ArrowLeft, CaretDown } from '@phosphor-icons/react';
import useItineraries from '../hooks/useItineraries';

const Stops = () => {
  const navigate = useNavigate()
  const { currentItinerary } = useItineraries()
  const handleSelect = stop => {
    console.log('Parada selecionada:', stop);
  };

  return (
    <div>
      <div className='h-100 w-100'>
        <MapComponent />
      </div>
      <Col className='fixed-top p-2' xs='12' md='5'>
        <Card>
          <CardBody>
            <div className='mb-3 d-flex align-items-center justify-content-between'>
              <div>
                <span className='me-2 cursor-pointer' onClick={() => navigate('/')}>
                  <ArrowLeft size={16} />
                </span>
                Tela Inicial
              </div>
              <div className='cursor-pointer'>
                <CaretDown size={24} id='toggler' />
              </div>
            </div>
            <BusStopList onSelect={handleSelect} />
            <div className='overflow-auto pb-2'>

            <div className='d-flex overflow-auto' style={{ whiteSpace: 'nowrap' }}>
              {currentItinerary.waypoints.map(w => (
                <Badge className='me-2 d-inline-block'>
                  {w.name}
                </Badge>
              ))}
            </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <div className='fixed-bottom p-2'>
        <ShowStopData />
      </div>
    </div>
  );
};

export default Stops;
