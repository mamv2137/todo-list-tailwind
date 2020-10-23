import styled from "styled-components";
import tw from "tailwind.macro";

export const InputContainer = styled.div`
  ${tw`relative flex w-full flex-wrap items-stretch mb-4`}
`;

export const Input = styled.input`
  ${tw`px-3 py-3 text-gray-800 relative bg-white-100 shadow-lg rounded-3xl text-sm outline-none focus:outline-none focus:shadow-outline w-full m-auto mr-1`}
`;

export const IconContainer = styled.span`
  ${tw`z-10 h-full leading-snug font-normal text-center text-gray-600 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3`}
`;