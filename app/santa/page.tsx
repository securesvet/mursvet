"use client";

import React, { useState } from "react";
import SpoilerTag from "@/components/ui/SpoilerTag/SpoilerTag";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [isSpoilerVisible, setSpoilerIsVisible] = useState(false);
  const [isPrizeGot, setIsPrizeGot] = useState(false);
  const handleSpoilerVisibleClick = () => {
    setSpoilerIsVisible(true);
  };
  const handleGetPrize = () => {
    setIsPrizeGot(true);
  };
  return (
    <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-bold text-nowrap">
      <h3>Мой подопечный это</h3>
      <Button  onClick={handleSpoilerVisibleClick} style={{color: 'black'}}>Показать подопечного</Button>
      {isSpoilerVisible && (
        <div>
          <h1>Кирюха...</h1>
          <Button onClick={handleGetPrize} style={{color: 'black'}}>Забрать свой подарочек</Button>
        </div>
      )}
      {isPrizeGot && (
        <div>
          <h1>Ключик от балдурочки</h1> <SpoilerTag> <h1>IXKX2-PP2Q7-XGDHI</h1> </SpoilerTag>
        </div>
      )}
    </div>
  );
};

export default Page;
