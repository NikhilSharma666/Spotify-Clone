import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";

export default function Sidebar() {
  const [{ userInfo }] = useStateProvider();
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <span>For you</span>
          </li>
          <li>
            <span>Top Tracks</span>
          </li>
          <li>
            <span>Favourites</span>
          </li>
          <li>
            <span>Recently Played</span>
          </li>
        </ul>
      </div>
      <div className="bottom_avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .top_links {
    display: flex;
    flex-direction: column;

    .logo {
      text-align: center;
      margin: 1rem 0;

      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;

      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
          color: white;
        }
      }
    }
  }

  .bottom_avatar {
    margin-top: auto;
    background-color: black;
    padding: 0.3rem 0.4rem;
    border-radius: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        color: #282828;
        font-size: 1.3rem;
        padding: 0.2rem;
      }
    }
  }
`;
