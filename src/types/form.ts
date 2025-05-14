export interface FormField {
  id: string;
  label: string;
  type: "text" | "number" | "url" | "textarea";
  placeholder: string;
  required: boolean;
  min?: string;
  max?: string;
}

export const formFields: FormField[] = [
  {
    id: "name",
    label: "Token Name",
    type: "text",
    placeholder: "e.g. My Awesome Token",
    required: true,
  },
  {
    id: "symbol",
    label: "Token Symbol",
    type: "text",
    placeholder: "e.g. MAT",
    required: true,
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Describe your token...",
    required: true,
  },
  {
    id: "imageUrl",
    label: "Token Image URL",
    type: "url",
    placeholder: "https://example.com/token-image.png",
    required: true,
  },
  {
    id: "decimals",
    label: "Decimals",
    type: "number",
    placeholder: "9",
    required: true,
    min: "0",
    max: "9",
  },
  {
    id: "supply",
    label: "Initial Supply",
    type: "number",
    placeholder: "1000000",
    required: true,
  },
  {
    id: "freezeAuthority",
    label: "Freeze Authority (Optional)",
    type: "text",
    placeholder: "Public key of freeze authority",
    required: false,
  },
  {
    id: "mintAuthority",
    label: "Mint Authority (Optional)",
    type: "text",
    placeholder: "Public key of mint authority",
    required: false,
  },
];

export interface FormData {
  name: string;
  symbol: string;
  description: string;
  imageUrl: string;
  decimals: string;
  supply: string;
  freezeAuthority: string;
  mintAuthority: string;
}
