import styled from "styled-components";
import tw from "tailwind.macro";

export const ListContainer = styled.div`
  ${tw`flex flex-col justify-between m-4`}
`;

export const ListItemsContainer = styled.div`
  ${tw`flex flex-col bg-white rounded-3xl shadow-lg p-4 w-auto overflow-y-auto`}
`;