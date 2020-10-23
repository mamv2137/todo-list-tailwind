import styled from "styled-components";
import tw from "tailwind.macro";

export const DropdownContainer = styled.div`
  ${tw`flex relative`}
`;

export const DropdownTrigger = styled.div`
  ${tw`flex items-center rounded-full overflow-hidden cursor-pointer`}
`;

export const DropdownContainerItem = styled.div`
  ${tw`block absolute right-0 mt-10 py-2 w-auto bg-white rounded-lg shadow-xl cursor-pointer`}
`;

export const DropdownItem = styled.div`
  ${tw`flex justify-between`}
`;

export const DropdownItemText = styled.span`
  ${tw`mx-2 text-gray-800 text-sm font-semibold`}
`;