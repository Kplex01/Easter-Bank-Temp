"use client";
import React from 'react';
import { LoginModal } from '../LoginModal';
import { OpenAccountModal } from '../OpenAccountModal';
import { ProductDetailModal } from '../ProductDetailModal';
import { LocationModal } from '../LocationModal';
import { HelpModal } from '../HelpModal';
import { RatesModal } from '../RatesModal';
import { RoutingModal } from '../RoutingModal';

export const ModalProvider: React.FC = () => {
  return (
    <>
      <LoginModal />
      <OpenAccountModal />
      <ProductDetailModal />
      <LocationModal />
      <HelpModal />
      <RatesModal />
      <RoutingModal />
    </>
  );
};
