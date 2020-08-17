import React, { useState, useEffect } from "react";

export const SplashScreen = ({ timeout = 1500, text }: ISplashScreenProps) => {
  const [isSplahScreenShowing, setIsSplahScreenShowing] = useState(true);

  // Initial Spalsh Screen Loading
  // Hides
  useEffect(() => {
    setTimeout(() => {
      setIsSplahScreenShowing(false);
    }, timeout);
  });

  return (
    <>
      {isSplahScreenShowing ? (
        <div>
          <h6>{text}</h6>
        </div>
      ) : null}
    </>
  );
};

export interface ISplashScreenProps {
  text: string;
  timeout?: number;
}
