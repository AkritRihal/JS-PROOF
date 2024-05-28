let nfts = [];

function mintNFT(name, eyeColor, shirtType, bling) {
  const nft = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling,
  };
  nfts.push(nft);
}

function listNFTs() {
  nfts.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log(`  Name: ${nft.name}`);
    console.log(`  Eye Color: ${nft.eyeColor}`);
    console.log(`  Shirt Type: ${nft.shirtType}`);
    console.log(`  Bling: ${nft.bling}`);
  });
}

// Print the total number of NFTs
function getTotalSupply() {
  return nfts.length;
}

// function call
mintNFT('Cool Cat', 'Blue', 'T-Shirt', 'Gold Chain');
mintNFT('Chill Dog', 'Brown', 'Hoodie', 'Silver Necklace');
mintNFT('Smart Fox', 'Green', 'Suit', 'Diamond Ring');

listNFTs();
console.log(`Total NFTs: ${getTotalSupply()}`);
