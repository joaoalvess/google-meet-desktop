/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import google from '../../assets/google.png';
import cafe from '../../assets/cafe.png';
import meet from '../../assets/meet.webp';

import { Container, CreateMeet, DivCreateButton, DivFavButton, DivSearch, DivTitle, FavButton, ImageFavButton, Label, Logo, SearchBar, SearchButton, Title } from './styles';

const dashboard: React.FC = () => {
  const [Color, setColor] = useState("#d6d6d8");
  const [Link, setLink] = useState("");

  function createMeet() {
    window.location.href = "https://calendar.google.com/calendar/u/1/r/eventedit?vcon=meet&dates=now&hl=pt-BR"
  }

  function enterMeet() {
    if (Link === "") {
      return
    }
    const arr = Link.split('/')
    if(arr[0] === "https:") {
      window.location.href = `${Link}?authuser=1`
    }
    if (arr[0] === "meet.google.com") {
      window.location.href = `https://${Link}?authuser=1`
    }
    return window.location.href = `https://meet.google.com/${Link}?authuser=1` 
  }

  function enterFavMeet() {
    return window.location.href = `https://meet.google.com/gsb-gpfg-tsb?authuser=1` 
  }

  useEffect(() => {
    if (Link !== "") {
      setColor("#08645A")
    }
    if (Link === "") {
      setColor("#d6d6d8")
    }
  },[Link])

  return (
    <>
      <DivTitle>
        <Logo src={google} />
        <Title>Meet Desktop</Title>
      </DivTitle>
      <Container>
        <DivCreateButton>
          <CreateMeet onClick={createMeet}>Nova Reunião</CreateMeet>
        </DivCreateButton>
        <DivSearch>
          <SearchBar 
            placeholder="Digite um código ou link"
            value={Link} 
            onChange={(e) => setLink(e.target.value)} 
          />
          <SearchButton
            onClick={() => enterMeet()}
            style={{color: `${Color}` }} 
          >Participar</SearchButton>
        </DivSearch>
        <DivFavButton>
          <FavButton onClick={enterFavMeet} >
            <ImageFavButton src={meet} />
          </FavButton>
          <Label htmlFor="">Daily</Label>
        </DivFavButton>
      </Container>
    </>
  );
}

export default dashboard;