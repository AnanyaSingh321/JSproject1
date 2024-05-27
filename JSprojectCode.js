const nftCollection = [];

function mintNFT(Name, EyeColor, ClothingType, Accessory) {
  const nftItem = {
    Name: Name,
    EyeColor: EyeColor,
    ClothingType: ClothingType,
    Accessory: Accessory,
  };
  nftCollection.push(nftItem);
  console.log("Minted NFT with name: " + Name);
}

function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("\nNFT No.: " + (i + 1));
    console.log("NFT Name: \t\t" + nftCollection[i].Name);
    console.log("Eye Color: \t\t" + nftCollection[i].EyeColor);
    console.log("ClothingType: \t" + nftCollection[i].ClothingType);
    console.log("Accessory: \t\t" + nftCollection[i].Accessory);
  }
}

function getTotalSupply() {
  console.log("\nTotal NFT Supply: " + nftCollection.length);
}

mintNFT("Ananya", "Blue", "T-Shirt", "Necklace");
mintNFT("Asmita", "Hazel", "Jacket", "Watch");
mintNFT("Shalu", "Grey", "Sweater", "Bracelet");
mintNFT("Garvit", "Black", "Shirt", "Sunglasses");
mintNFT("Shalvi", "Green", "Sweater", "Hat");

listNFTs();
getTotalSupply();
