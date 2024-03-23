export interface AllAislesApiResponse {
  success: boolean;
  message: string;
  result: {
    aisleName: string;
    aisleCode: string;
  }[];
}
