import styled from "styled-components";
import tw from "tailwind.macro";

export const AppStyles = styled.div`
  ${tw`w-full max-h-screen h-screen flex flex-col items-center justify-center py-8`}
`;

export const MainContainer = styled.div`
  ${tw`flex bg-gray-100 w-4/5 h-full rounded-3xl shadow-lg p-4`}
`;

export const ContentContainer = styled.div`
  ${tw`flex flex-col m-2 flex-1`}
`;

