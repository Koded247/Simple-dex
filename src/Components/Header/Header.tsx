import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import {
  ConnectButtonStyle,
  HeaderStyle,
  LogoStyle,
} from "../../Styles/Header";
import { formatAddress } from "../../utils/helpers";
import GlobalPreferences from './GlobalPreferences';


export const Header = () => {
  return (
    <>
        <HeaderStyle>
      <Logo />
      
      {/* <GlobalPreferences /> */}
      <ConnectButton />
      
      
    </HeaderStyle>
    

    </>

  );
};

export const Logo = () => {
  return (
    <LogoStyle>
      <div className="img">
        <img src="/scrollswap.svg" alt="uniswap logo" className="" />
      </div>
      <h3>ScrollSwap</h3>
    </LogoStyle>
  );
};


export const ConnectButton = () => {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const handleButtonClick = () => {
    open();
  };
  return (
   <div className=" flex">
     <GlobalPreferences />
    <ConnectButtonStyle onClick={handleButtonClick}>
      {isConnected ? formatAddress(address ?? "") : "Connect Wallet"}
    </ConnectButtonStyle>
   </div>
  );
};
