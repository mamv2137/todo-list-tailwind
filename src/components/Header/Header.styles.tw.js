import styled from "styled-components";
import tw from "tailwind.macro";

export const HeaderContainer = styled.div`
  ${tw`flex justify-between bg-transparent w-full`}
`;

export const AddTaskButton = styled.div`
  ${tw`flex bg-blue-600 rounded-full w-12 h-12 items-center justify-center shadow-lg cursor-pointer`}
`;