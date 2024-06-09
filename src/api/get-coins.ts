const API_ULR = 'https://api-eu.okotoki.com/coins';

type GetCoinsResponseDto = string[];

export const getCoins = async ():Promise<GetCoinsResponseDto> => {
  const response = await fetch(API_ULR);
  const data = await response.json();
  return data;
};