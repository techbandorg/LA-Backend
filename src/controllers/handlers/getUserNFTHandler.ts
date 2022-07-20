// @ts-nocheck
import mintNFTService from '../../services/mintNFT.service';
// import NFTIDsService from '../../services/NFTIDs.service';

const getUserNFTHandler = async data => {
  const mintNFTs = await mintNFTService.getAllMintNFTs();
  const dataKeys = Object.keys(data);

  let userNFT = [];

  if (dataKeys[0] === 'userAddress') {
    for (let i = 0; i < mintNFTs.length; i += 1) {
      // const result = await NFTIDsService.getNFTID(mintNFTs[i].transactionHash);

      // const nftKeys = Object.keys(mintNFTs[i]);

      mintNFTs[i].userAddress === data.userAddress &&
        userNFT.push({
          nftId: mintNFTs[i].nftId,
          // nftId: nftKeys.includes('nftId') ? mintNFTs[i].nftId : 'no id',
          merchant: mintNFTs[i].merchant,
          subscriptionId: mintNFTs[i].subscriptionId,
          userId: mintNFTs[i].userId,
          transactionHash: mintNFTs[i].transactionHash,
        });
    }
  }

  if (
    (dataKeys[0] === 'userId',
    dataKeys[1] === 'subscridtionId',
    dataKeys[2] === 'merchant')
  ) {
    for (let i = 0; i < mintNFTs.length; i += 1) {
      mintNFTs[i].userId === Number(data.userId) &&
        mintNFTs[i].subscriptionId === Number(data.subscriptionId) &&
        mintNFTs[i].merchant === data.merchant &&
        userNFT.push({
          userAddress: mintNFTs[i].userAddress,
        });
    }
  }

  return userNFT;
};

export default getUserNFTHandler;
