// @ts-nocheck
import transferNFTService from '../../services/transferNFT.service';
import getEvents from './getEvents';

const checkEvents = async label => {
  console.log('checkEvents!', label);

  const _NFTs = await transferNFTService.getTransferNFT();

  const lastCount = _NFTs[_NFTs.length - 1].count;

  // console.log('lastCount -->', lastCount);

  getEvents(lastCount);
};

export default checkEvents;
