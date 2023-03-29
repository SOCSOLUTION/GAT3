import { Route, Routes, useLocation } from 'react-router-dom';
import { MarketplaceProvider } from './Context/MarketplaceContext';
import ProtectedRoutes from "./ProtectedRoutes";
import AboutUs from './components/AboutUs';
import Activity from './components/Activity';
import Art from './components/Art';
import ArtDetails from './components/ArtDetails';
import ArtistDetails from './components/ArtistDetails';
import Artists from './components/Artists';
import ComingSoon from './components/ComingSoon';
import Dashboard from './components/Admin Dashboard/Dashboard';
import Digitize from './components/Digitize';
import Exhibition from './components/Exhibition';
import FeaturedItems from './components/FeaturedItems';
import LiveBidding from './components/LiveBidding';
import LiveBids from './components/Admin Dashboard/LiveBids';
import Main from './components/Main';
import MyCollections from './components/Admin Dashboard/MyCollections';
import MyWallet from './components/MyWallet';
import JoinUs from './components/JoinUs';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Faq from './components/Faq';
import Sattings from './components/Sattings';
import DigitizeNew from './components/DigitizeNew';
import ExhibitionArtists from './components/ExhibitionArtists';
import CreateNft from './components/Artist Dashboard/CreateNft';
import Favourite from './components/Favourite';
import Notifications from './components/Notifications';
import ArtistDashboard from './components/Artist Dashboard/ArtistDashboard';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Get3 from './components/Get3';
import MyNFTPage from './components/Admin Dashboard/myNFTPage/MyNFTPage';
import MintNft from './components/Artist Dashboard/MintNFT';
import AdminAllSellers from './components/Admin Dashboard/adminAllSellers/AdminAllSellers';
import AdminSellerDetails from './components/Admin Dashboard/adminSellerDetails/AdminSellerDetails';
import ArtistLiveBids from './components/Artist Dashboard/artistLiveBids/ArtistLiveBids';
import MyCollectionsArtist from './components/Artist Dashboard/MyCollectionsArtist';
import ArtistCreateNft from './components/Artist Dashboard/artistCreateNft/ArtistCreateNft';
import ArtistWallet from './components/Artist Dashboard/artistWallet/ArtistWallet';
import ArtistSettings from './components/Artist Dashboard/artistSettings/ArtistSettings';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';


function getLibrary(provider) {
    return new Web3(provider)
  }


function Views() {
    const location = useLocation();
  
  return (
    <div className="App">
    
      <Web3ReactProvider getLibrary={getLibrary}>
      {/* <Component /> */}
      <MarketplaceProvider >
      {location.pathname === "/artistsettings"||location.pathname === "/artistwallet"||location.pathname === "/artistcreatenft"|| location.pathname === "/mycollectionartist"|| location.pathname==="/artistlivebids"||location.pathname==="/sellerdetails"||location.pathname === "/allsellers"||location.pathname==="/sattings"||location.pathname === "/my_wallet"||location.pathname === "/my_collections"||location.pathname === "/live_bid"||location.pathname === "/artist_dashboard"||location.pathname === "/nftpage" || location.pathname === "/create-nft" || location.pathname === "/dashboard" ?"":<Navbar/>}
      {/* <Navbar/> */}
        <div className="">
        <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/digitizeOld" element={<Digitize/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/nftpage" element={<MyNFTPage></MyNFTPage>} />
        <Route path="/art" element={<Art/>} />
        <Route path="/exhibition" element={<Exhibition/>} />
        <Route path="/about_us" element={<AboutUs/>} />
        <Route path="/join_us" element={<JoinUs/>} />
        <Route path="/my_collections" element={<MyCollections/>} />
        <Route path="/my_wallet" element={<MyWallet/>} />
        <Route path="/featured_items" element={<FeaturedItems/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/activity" element={<Activity/>} />
        <Route path="/art_details" element={<ArtDetails/>} />
        <Route path="/artist_details" element={<ArtistDetails/>} />
        <Route path="/live_bidding" element={<LiveBidding/>} />
        <Route path="/live_bid" element={<LiveBids/>} />
        <Route path="/coming_soon" element={<ComingSoon/>} />
        <Route path="/term_Of_Service" element={<TermsOfService/>} />
        <Route path="/privacy_policy" element={<PrivacyPolicy/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/sattings" element={<Sattings/>} />
        <Route path="/digitize" element={<DigitizeNew/>} />
        <Route path="/exhibition-artist" element={<ExhibitionArtists/>} />
        <Route path="/create-nft" element={<CreateNft/>} />
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/notification" element={<Notifications/>} />
        
       
        <Route path="/get3" element={<Get3/>} />
        <Route path="/mintNFT" element={<MintNft></MintNft>}/>
        <Route path="/allsellers" element={<AdminAllSellers></AdminAllSellers>}/>
        <Route path="/sellerdetails" element={<AdminSellerDetails></AdminSellerDetails>}/>
        
        <Route element={<ProtectedRoutes />}>
            <Route path="/artist_dashboard" element={<ArtistDashboard/>} />
            <Route path="/artistlivebids" element={<ArtistLiveBids></ArtistLiveBids>}></Route>
            <Route path="/mycollectionartist" element={<MyCollectionsArtist></MyCollectionsArtist>}></Route>
            <Route path="/artistcreatenft" element={<ArtistCreateNft></ArtistCreateNft>}></Route>
            <Route path="/artistwallet" element={<ArtistWallet></ArtistWallet>}></Route>
            <Route path="/artistsettings" element={<ArtistSettings></ArtistSettings>}></Route>
       </Route>
       
       
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
     
     </Routes>
     </div>
     {location.pathname === "/artistsettings"||location.pathname === "/artistwallet"||location.pathname === "/artistcreatenft"|| location.pathname === "/mycollectionartist"||location.pathname==="/artistlivebids"||location.pathname === "/artist_dashboard"||location.pathname==="/sellerdetails"||location.pathname === "/allsellers"||location.pathname==="/sattings"||location.pathname === "/my_wallet"||location.pathname === "/my_collections"||location.pathname === "/live_bid"||location.pathname === "/nftpage" || location.pathname === "/create-nft" || location.pathname === "/dashboard" ?"":<Footer/>}
  
     </MarketplaceProvider>
     </Web3ReactProvider>
    </div>
  );
  }


  export default Views;