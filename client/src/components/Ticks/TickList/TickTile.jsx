import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import Modal from '../../../shared/Modal.jsx';
import useModal from '../../../shared/useModal.js';
import EditTick from './EditTick.jsx';
import { TickTileContainer } from '../../styles/styles.js';

const TickTile = function TickTile({ tick, updateList }) {
  const { isOpen, onOpen, onClose } = useModal();

  const formatDate = (date) => {
    const parsedDate = parseISO(date);
    return format(parsedDate, 'PP');
  };

  const handleReported = () => {
    axios
      .put(`/rr/ticks/${tick.tick_id}/flag`)
      .then((results) => {
        console.info(results.status);
        updateList();
      })
      .catch((err) => console.error('Error deleting review', err));
  };

  return (
    <TickTileContainer>
      <div className="tick-tile-top">
        <div className="route-info">
          <div className="route-name">{tick.tick_route}</div>
          <div className="route-grade">{tick.tick_grade}</div>
          <div className="route-location">{`${tick.location}  >  ${tick.subregion}  >  ${tick.wall}`}</div>
        </div>
        <div className="tick-tile-buttons">
          <AiOutlineEdit onClick={onOpen} />
          <Modal isOpen={isOpen} onClose={onClose}>
            <EditTick onClose={onClose} tick={tick} />
          </Modal>
          <BsTrash onClick={handleReported} />
        </div>
      </div>

      <div className="user-route-info">
        <div className="route-date">{formatDate(tick.tick_date)}</div>
        <div className="route-style">{`${tick.style} / ${tick.lead_style}`}</div>
        <div className="route-notes">{tick.tick_notes}</div>
      </div>
    </TickTileContainer>
  );
};

export default TickTile;
