import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  min-height: 80vh;
`;

export const DivTitle = styled.div`
  display: flex;
  color: #08645A;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
`;

export const Logo = styled.img`
  
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin-left: 8px;
`;

export const DivCreateButton = styled.div`
`;

export const CreateMeet = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  padding: 20px;
  border-radius: 15px;
  border: 1px #08645A solid;
  background: #08645A;
  color: #F9FBFB;
  width: 250px;

  :hover {
    cursor: pointer;
  }
`;

export const DivSearch = styled.div`
  padding-top: 42px;
`;

export const SearchBar = styled.input`
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  width: 40vw;
  border-radius: 10px;
  font-size: 16px;
  border: 1px #555 solid;

  :focus {
    outline:0;
    border: 2px #08645A solid;
  }
`;

export const SearchButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  padding: 20px;
  border-radius: 15px;
  border: 1px #f4f4f6 solid;
  background: #f4f4f6;
  color: #d6d6d8;
  width: 100px;

  :hover {
    cursor: pointer;
  }
`;

export const DivFavButton = styled.div`
  padding-top: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageFavButton = styled.img`
  width: 50px;
  height: 50px;
`;

export const FavButton = styled.button`
  border-radius: 200%;
  width: 100px;
  height: 100px;
  border: 1px #d6d6d8 solid;
  background: #d6d6d8;

  :hover {
    cursor: pointer;
    border: 3px #08645A solid;
  }
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  padding-top: 10px;
  font-size: 16px;
`;