function beep() {
  var snd = new Audio(
    "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
  );
  snd.play();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getData(cursor) {
  const body = {
    id: "AssetSearchCollectionQuery",
    query:
      "query AssetSearchCollectionQuery(\n  $collection: CollectionSlug\n  $collections: [CollectionSlug!]\n  $count: Int\n  $cursor: String\n  $numericTraits: [TraitRangeType!]\n  $paymentAssets: [PaymentAssetSymbol!]\n  $priceFilter: PriceFilterType\n  $query: String\n  $resultModel: SearchResultModel\n  $showContextMenu: Boolean = false\n  $sortAscending: Boolean\n  $sortBy: SearchSortBy\n  $stringTraits: [TraitInputType!]\n  $toggles: [SearchToggle!]\n  $isAutoHidden: Boolean\n  $safelistRequestStatuses: [SafelistRequestStatus!]\n  $prioritizeBuyNow: Boolean = false\n) {\n  query {\n    ...AssetSearchCollection_data_d9bxY\n  }\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  orderData {\n    bestAskV2 {\n      relayId\n      priceType {\n        usd\n      }\n      id\n    }\n  }\n}\n\nfragment AssetContextMenu_data on AssetType {\n  ...asset_edit_url\n  ...asset_url\n  relayId\n  isDelisted\n  creator {\n    address\n    id\n  }\n  imageUrl\n}\n\nfragment AssetMediaAnimation_asset on AssetType {\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaAudio_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaContainer_asset_2V84VL on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_2V84VL\n}\n\nfragment AssetMediaEditions_asset_2V84VL on AssetType {\n  decimals\n}\n\nfragment AssetMediaImage_asset on AssetType {\n  backgroundColor\n  imageUrl\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaPlaceholderImage_asset on AssetType {\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaVideo_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaWebgl_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_2V84VL\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetMedia_asset_2V84VL on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_2V84VL\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment AssetSearchCollection_data_d9bxY on Query {\n  queriedAt\n  ...AssetSearchFilter_data_3KTzFc\n  ...PhoenixSearchPills_data_2Kg4Sq\n  search: collectionItems(after: $cursor, collections: $collections, first: $count, isAutoHidden: $isAutoHidden, numericTraits: $numericTraits, paymentAssets: $paymentAssets, resultType: $resultModel, priceFilter: $priceFilter, querystring: $query, safelistRequestStatuses: $safelistRequestStatuses, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, prioritizeBuyNow: $prioritizeBuyNow) {\n    edges {\n      node {\n        __typename\n        relayId\n        ...AssetSearchList_data_27d9G3\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSearchFilter_data_3KTzFc on Query {\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    defaultChain {\n      identifier\n    }\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment AssetSearchList_data_27d9G3 on ItemType {\n  __isItemType: __typename\n  __typename\n  relayId\n  collection {\n    isVerified\n    relayId\n    id\n  }\n  ...ItemCard_data_1OrK6u\n  ... on AssetType {\n    ...SelectedAssetItem_data\n    ...asset_url\n  }\n  chain {\n    identifier\n  }\n}\n\nfragment ItemCardAnnotations_27d9G3 on ItemType {\n  __isItemType: __typename\n  relayId\n  ... on AssetType {\n    chain {\n      identifier\n    }\n    decimals\n    favoritesCount\n    isDelisted\n    isFrozen\n    hasUnlockableContent\n    ...AssetCardBuyNow_data\n    orderData {\n      bestAskV2 {\n        orderType\n        maker {\n          address\n          id\n        }\n        id\n      }\n    }\n    ...AssetContextMenu_data @include(if: $showContextMenu)\n  }\n  ... on AssetBundleType {\n    assetCount\n  }\n}\n\nfragment ItemCardContent_2V84VL on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    relayId\n    name\n    ...AssetMedia_asset_2V84VL\n  }\n  ... on AssetBundleType {\n    assetQuantities(first: 18) {\n      edges {\n        node {\n          asset {\n            relayId\n            ...AssetMedia_asset\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ItemCardFooter_27d9G3 on ItemType {\n  __isItemType: __typename\n  name\n  collection {\n    slug\n    name\n    isVerified\n    ...collection_url\n    id\n  }\n  orderData {\n    bestBidV2 {\n      orderType\n      priceType {\n        unit\n      }\n      ...PriceContainer_data\n      id\n    }\n    bestAskV2 {\n      orderType\n      priceType {\n        unit\n      }\n      maker {\n        address\n        id\n      }\n      ...PriceContainer_data\n      id\n    }\n  }\n  ...ItemMetadata\n  ...ItemCardAnnotations_27d9G3\n  ... on AssetType {\n    tokenId\n    isDelisted\n  }\n}\n\nfragment ItemCard_data_1OrK6u on ItemType {\n  __isItemType: __typename\n  __typename\n  relayId\n  orderData {\n    bestAskV2 {\n      priceType {\n        eth\n      }\n      id\n    }\n  }\n  ...ItemCardContent_2V84VL\n  ...ItemCardFooter_27d9G3\n  ...item_url\n  ... on AssetType {\n    isDelisted\n    ...itemEvents_data\n  }\n}\n\nfragment ItemMetadata on ItemType {\n  __isItemType: __typename\n  __typename\n  orderData {\n    bestAskV2 {\n      closedAt\n      id\n    }\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment NumericTraitFilter_data on NumericTraitTypePair {\n  key\n  value {\n    max\n    min\n  }\n}\n\nfragment OrderPrice on OrderV2Type {\n  priceType {\n    unit\n  }\n  perUnitPriceType {\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    ...TokenPricePayment\n    id\n  }\n}\n\nfragment PaymentFilter_data_2YoIWt on Query {\n  paymentAssets(first: 10) {\n    edges {\n      node {\n        symbol\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  PaymentFilter_collection: collection(collection: $collection) {\n    paymentAssets {\n      symbol\n      id\n    }\n    id\n  }\n}\n\nfragment PhoenixSearchPills_data_2Kg4Sq on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        imageUrl\n        name\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment PriceContainer_data on OrderV2Type {\n  ...OrderPrice\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment SelectedAssetItem_data on AssetType {\n  collection {\n    imageUrl\n    name\n    verificationStatus\n    id\n  }\n  imageUrl\n  displayName\n  relayId\n  ...asset_url\n}\n\nfragment StringTraitFilter_data on StringTraitType {\n  counts {\n    count\n    value\n  }\n  key\n}\n\nfragment TokenPricePayment on PaymentAssetType {\n  symbol\n  chain {\n    identifier\n  }\n  asset {\n    imageUrl\n    assetContract {\n      blockExplorerLink\n      id\n    }\n    id\n  }\n}\n\nfragment asset_edit_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n  chain {\n    identifier\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment itemEvents_data on AssetType {\n  relayId\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment item_url on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    ...asset_url\n  }\n  ... on AssetBundleType {\n    ...bundle_url\n  }\n}\n",
    variables: {
      categories: null,
      chains: null,
      collection: "bellygom-world-official",
      collectionQuery: null,
      collectionSortBy: null,
      collections: ["bellygom-world-official"],
      count: 20,
      cursor: cursor,
      includeHiddenCollections: null,
      numericTraits: null,
      paymentAssets: null,
      priceFilter: null,
      query: "",
      resultModel: "ASSETS",
      showContextMenu: true,
      sortAscending: true,
      sortBy: "UNIT_PRICE",
      stringTraits: null,
      toggles: ["BUY_NOW"],
      creator: null,
      assetOwner: null,
      isPrivate: null,
      isAutoHidden: null,
      safelistRequestStatuses: null,
      prioritizeBuyNow: true,
    },
  };

  const result = await (
    await fetch("https://opensea.io/__api/graphql/", {
      headers: {
        accept: "*/*",
        "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-app-id": "opensea-web",
        "x-build-id": "0d45f4f689c99538c8d4a4c1d51e9f62ea6deffd",
        "x-signed-query":
          "4b4128c185300d618046f7b37ca7764726a37101aabf1902e962b0ab17d98b5f",
      },
      referrer: "https://opensea.io/",
      referrerPolicy: "strict-origin",
      body: JSON.stringify(body),
      method: "POST",
      mode: "cors",
      credentials: "include",
    })
  ).text();

  console.log("data", result);
  return JSON.parse(result).data;
}

async function getOnSale() {
  let items = [];
  let hasNextPage = true;
  let cursor = null;
  try {
    while (hasNextPage) {
      const data = await getData(cursor);
      items = [...items, ...data.query.search.edges];
      cursor = data.query.search.pageInfo.endCursor;
      hasNextPage = data.query.search.pageInfo.hasNextPage;
    }
  } catch (e) {
    console.error(e);
  }
  return items.map((item) => item.node.tokenId);
}

async function isRevealed() {
  const metadata = await getMetadata("4656");
  if (metadata.attributes) return true;
  return false;
}

async function getMetadata(tokenId) {
  const metadata = await (
    await fetch(`http://localhost:3003/${tokenId}`, { cache: "no-store" })
  ).json();
  return metadata;
}

function isTarget(metadata, rarity) {
  if (!metadata.attributes) return false;

  // rarity, grade, level 특성이 있을경우
  let traitRarity = metadata.attributes.find(
    (x) => x.trait_type.toLowerCase() === "rarity"
  );
  if (!traitRarity) {
    traitRarity = metadata.attributes.find(
      (x) => x.trait_type.toLowerCase() === "grade"
    );
  }
  if (!traitRarity) {
    traitRarity = metadata.attributes.find(
      (x) => x.trait_type.toLowerCase() === "level"
    );
  }
  if (traitRarity) {
    const rarity = traitRarity.value.toLowerCase();
    if (rarity.includes(rarity.slice(0, 3))) return true;
  }

  // rarity 특성이 없을경우 trait value로 체크
  const traitValues = metadata.attributes
    .map((x) => x.value.toString().toLowerCase())
    .join(",");
  if (traitValues.includes(rarity)) return true;

  return false;
}

async function buyProcess(targets) {
  document.body.innerHTML = "";
  targets
    .map((target) => {
      const link = document.createElement("a");
      link.innerText = target;
      link.href = `https://opensea.io/assets/klaytn/0xce70eef5adac126c37c8bc0c1228d48b70066d03/${target}`;
      link.target = "_blank";
      link.style.display = "block";
      return link;
    })
    .forEach((link) => document.body.appendChild(link));
}

async function monitor() {
  let saleItems = await getOnSale();

  while (!(await isRevealed())) {
    await sleep(1000);
  }

  const metadataList = await Promise.all(
    saleItems.map((tokenId) => getMetadata(tokenId))
  );

  const targets = [];

  metadataList.forEach((metadata, idx) => {
    if (isTarget(metadata, "belly")) {
      targets.push(saleItems[idx]);
    }
  });

  metadataList.forEach((metadata, idx) => {
    if (isTarget(metadata, "holic")) {
      targets.push(saleItems[idx]);
    }
  });

  metadataList.forEach((metadata, idx) => {
    if (isTarget(metadata, "mega")) {
      targets.push(saleItems[idx]);
    }
  });

  const beepInterval = setInterval(beep, 1000);
  setTimeout(() => clearInterval(beepInterval), 5000);
  await buyProcess(targets);
}

await monitor();
