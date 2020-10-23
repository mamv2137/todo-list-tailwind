import styled from "styled-components";
import tw from "tailwind.macro";

export const SidebarContainer = styled.div`
  ${tw`flex-initial flex flex-col rounded-3xl shadow-lg justify-between text-gray-700 text-center bg-white p-4 m-2`}
`;

export const SidebarMenuContainer = styled.div`
  ${tw`flex flex-col items-center`}
`;