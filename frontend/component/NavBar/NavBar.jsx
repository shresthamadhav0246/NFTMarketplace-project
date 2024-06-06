import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo1.png";
import user1 from "../../img/user-icon.png";
import { Button } from "../index";
import { useTheme } from "styled-components";
import ThemeToggle from "../Switch/ThemeToggle";

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";

import NFTMarketplaceContext from "@/context/NFTMarketplace";
import { getUser } from "@/utils/api";
import styled from "styled-components";
import { useRouter } from "next/router";

const Header = styled.header`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
`;

const NavBar = ({ toggleTheme, isDarkMode }) => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // NFT smart contract section
  const { currentAccount, connectWallet, disconnectWallet } = useContext(
    NFTMarketplaceContext
  );

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      // handle other buttons if needed
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);

      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenSideMenu(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (currentAccount) {
          console.log("Fetching user profile for account:", currentAccount);
          const response = await getUser(currentAccount);
          setUser(response);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [currentAccount]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    router.push(`/collection?search=${searchQuery}`);
  };

  return (
    <Header>
      <Card>
        <div className={Style.navbar}>
          <div className={Style.navbar_container}>
            <div className={Style.navbar_container_left}>
              <div className={Style.logo}>
                <Link href={{ pathname: "/" }}>
                  <Image
                    src={logo}
                    alt="NFT Marketplace Logo"
                    width={70}
                    height={70}
                  />
                </Link>
              </div>
              <div className={Style.navbar_container_left_box_input}>
                <div className={Style.navbar_container_left_box_input_box}>
                  <Input
                    type="text"
                    placeholder="Search NFTs..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={Style.input}
                  ></Input>
                  <BsSearch
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default behavior of the click event
                      handleSearch();
                    }}
                    className={Style.search_icon}
                  />
                </div>
              </div>
            </div>
            <div className={Style.navbar_container_right}>
              <div className={Style.navbar_container_right_discover}>
                <p
                  onClick={(e) => {
                    openMenu(e);
                  }}
                >
                  Discover
                </p>
                {discover && (
                  <div className={Style.navbar_container_right_discover_box}>
                    <Discover />
                  </div>
                )}
              </div>

              <div className={Style.navbar_container_right_help}>
                <p
                  onClick={(e) => {
                    openMenu(e);
                  }}
                >
                  Help Center
                </p>
                {help && (
                  <div className={Style.navbar_container_right_help_box}>
                    <HelpCenter />
                  </div>
                )}
              </div>
              {/* Notification */}
              <div className={Style.navbar_container_right_notify}>
                <MdNotifications
                  className={Style.notification}
                  onClick={() => openNotification()}
                />
                {notification && <Notification />}
              </div>

              {currentAccount == null ? (
                <div className={Style.navbar_container_right_button}>
                  <Button
                    btnName="Connect Wallet"
                    handleClick={() => connectWallet()}
                  />
                </div>
              ) : (
                <div className={Style.navbar_container_right_button}>
                  <Link href={{ pathname: "/NFT-upload" }}>
                    {" "}
                    <Button btnName="Create" />
                  </Link>
                </div>
              )}
              {currentAccount && (
                <div className={Style.navbar_container_right_profile_box}>
                  <div className={Style.navbar_container_right_profile}>
                    <Image
                      src={user?.profilePicture || user1}
                      alt="Profile"
                      width={40}
                      height={40}
                      onClick={() => openProfile()}
                      className={Style.navbar_container_right_profile}
                    />
                    {profile && (
                      <Profile
                        currentAccount={currentAccount}
                        user={user}
                        disconnectWallet={disconnectWallet}
                      />
                    )}
                  </div>
                </div>
              )}

              <div className={Style.switch}>
                <ThemeToggle
                  toggleTheme={toggleTheme}
                  isDarkMode={isDarkMode}
                />
              </div>
              {/** menu button for mobile device */}
              <div className={Style.navbar_container_right_menuBtn}>
                <CgMenuRight
                  className={Style.menuIcon}
                  onClick={() => openSideBar()}
                />
              </div>
            </div>
          </div>
          {openSideMenu && (
            <div className={Style.SideBar}>
              <SideBar
                setOpenSideMenu={setOpenSideMenu}
                currentAccount={currentAccount}
                connectWallet={connectWallet}
              />
            </div>
          )}
        </div>
      </Card>
    </Header>
  );
};

export default NavBar;
