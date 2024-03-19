export interface AllShelvesApiResponse {
  success: boolean;
  message: string;
  result: {
    shelfName: string;
    shelfCode: string;
  }[];
}
