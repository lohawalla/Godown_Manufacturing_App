export interface AllGodownsApiResponse {
  success: boolean;
  message: string;
  godowns: {
    godownName: string;
    godownCode: string;
  }[];
}
