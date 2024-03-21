export interface AllAislesApiResponse {
  success: boolean;
  message: string;
  result: {
    aisleName: string;
    aisleCode: string;
  }[];
}

export interface AssignQrCodeAisleValue {
  qrCodeValue: string;
  aisleCode: string;
}

export interface AssignQrCodeAisleValueResponse {
  success: string;
  message: string;
}
